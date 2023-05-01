import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Conversations } from '../model/Conversations';

@Component({
  selector: 'app-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.css']
})

export class NavBarComponentComponent implements OnInit{

  listConvo!:Conversations[];
  userId:number=3;

  constructor(private chatservice:ChatService) { }

  ngOnInit() {
    this.chatservice.getMessagesByConversationIdAndUserId(this.userId).subscribe({
      next:(data) => 
      this.listConvo= data
    });
  }
          

}
