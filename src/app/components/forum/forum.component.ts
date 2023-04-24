import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';
import { ReactService } from 'src/app/services/react.service';
import { React } from 'src/app/model/React';



@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit{
  post!:Post; 
  id : number = 2;
  selectedFiles!: File[];
  //Display
  listPosts !:Post[]; // Define listPosts$ as an Observable<Post[]>
  //Reactiong
  emojiList!:string[];
  showEmojis = false;
  reactionCount: any;
  userReaction: any;
  subscription: any;

  constructor(private postService: PostService, private reactService: ReactService) { }
  
  ngOnInit(): void {
    this.post = new Post();
    this.postService.getPosts(this.id).subscribe({
      next:(data) => 
      this.listPosts= data
    });
    this.emojiList = this.reactService.emojiList

  }

  onFilesSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  onButtonHovered(event: any) {
    this.selectedFiles = event.target.files;
  }
  
  save(){
    this.postService.addWPostFiles(this.post, this.id, this.selectedFiles).subscribe(
      response => console.log(response),
      error => console.log(error)
    )
  }

  // addOrUpdatePostReact(postid : number){
  //   this.reactService.addOrUpdate(react, this.id, postid)
  //     .subscribe(
  //       response => console.log(response),
  //       error => console.error(error)
  //     );
  // }

}
