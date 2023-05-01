import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';
import { ReactService } from 'src/app/services/react.service';
import { React } from 'src/app/model/React';
import { CommentsService } from 'src/app/services/comments.service';
import { Comments } from 'src/app/model/Comment';
import { Router } from '@angular/router';



@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit{
  post!:Post; 
  comment!:Comments; 
  id : number = 2;
  selectedFiles!: File[];
  //Display
  listPosts !:Post[]; // Define listPosts$ as an Observable<Post[]>
  listComments !:Comments[]; // Define listPosts$ as an Observable<Post[]>
  //Reactiong
  emojiList!:string[];
  showEmojis = false;
  reactionCount: any;
  userReaction: any;
  subscription: any;

  constructor(private postService: PostService,private route:Router ,private commentService: CommentsService, private reactService: ReactService) { }
  
  ngOnInit(): void {
    this.post = new Post();
    this.comment = new Comments();
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
    this.postService.addWPostFiles(this.post, this.id, this.selectedFiles).subscribe({
      next:()=>this.route.navigateByUrl('/forum')
     });
  }


  showComments(i:number) {
    this.commentService.getCommentsByPost(i).subscribe({
      next:(data) => 
      this.listComments= data,
    });
  }

  writeComments(postId:number){
    this.commentService.assignCommentToPost(this.comment, postId, this.id).subscribe({
      next:()=>this.route.navigateByUrl('/forum')
     });
  }
}