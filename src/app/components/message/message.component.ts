import { Component, ElementRef, OnInit, AfterViewChecked} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Messages } from 'src/app/model/Messages';
import { ChatService } from 'src/app/services/chat.service';
import { Conversations } from 'src/app/model/Conversations';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [DatePipe]

})
export class MessageComponent implements OnInit{
  userid:number=3;
  receivedMessages!: Messages[];
  stompClient!:any;
  newMessage: string = '';
  message!:Messages;
  channelName!: string;
  listConvo!:Conversations[];
  

  constructor(private activeRoute:ActivatedRoute,private chatservice:ChatService, private element: ElementRef) { }

  ngOnInit() {
    this.chatservice.getMessagesByConversationIdAndUserId(this.userid).subscribe({
      next:(data) => 
      this.listConvo= data
    });
    this.channelName= this.activeRoute.snapshot.params['id'];
    this.loadChat();
    this.message= new Messages();
    this.connect();
  }
  // ngAfterViewChecked(): void {
  //   this.scrollDown();
  // }

  connect() {
    const webSocket = new SockJS('http://localhost:8088/WelcomeToEsprit/testchat');
    this.stompClient = Stomp.over(webSocket);
    const _this = this;
    this.stompClient.connect({}, function (frame: any) {
      console.log('Connected: ' + frame);
      _this.stompClient.subscribe('/start/initial/'+ _this.channelName, function(message: any){
        _this.loadChat();
      });
   });
  }
  sendMessage() {
  if (this.message.content !== '') {
        this.stompClient.send('/current/resume/' + this.channelName, {}, JSON.stringify({
          content: this.message.content,
          sender: {id: this.userid}
        })
      );
      console.log(this.channelName);
      this.loadChat();
      this.message.content = ''; // clear the form
    }
  }
  // loadChat() {
  //   this.chatservice.getChatsById(parseInt(this.channelName)).subscribe({
  //     next:(data) => 
  //     this.receivedMessages= data
  //   });
  // }
  loadChat() {
  this.chatservice.getChatsById(parseInt(this.channelName)).subscribe({
    next:(data) => {
      // sort messages by creation date in ascending order
      this.receivedMessages= data.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }
  });
}




  // scrollDown(){
  //   var container = this.element.nativeElement.querySelector("#chat");
  //   container.scrollTop = container.scrollHeight;
  // }
  
}
  // sendMessage() {
  //   this.stompClient.send('/current/resume',
  //     {},
  //     JSON.stringify(this.newMessage)
  //   );
  //   this.newMessage = "";
  // }

//   sendMessage(conversationId: string) {
//   const headers = { 'conversationId': conversationId };
//   const payload = JSON.stringify({ content: message });
//   this.stompClient.send('/current/resume/' + conversationId, headers, payload)
//     .subscribe((response:any) => {
//       const receivedMessage = JSON.parse(response.body).content;
//       console.log('Received message: ' + receivedMessage);
//       this.receivedMessages.push(receivedMessage);
//     });
// }