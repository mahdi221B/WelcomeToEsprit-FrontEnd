import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/services/post.service';
import { ReactService } from 'src/app/services/react.service';
import { CommentsService } from 'src/app/services/comments.service';
import { Comments } from 'src/app/model/Comment';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  providers: [DatePipe]

})
export class ForumComponent implements OnInit{
  post!:Post; 
  comment!:Comments; 
  id : number = 3;
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
    this.getPosts();
    this.emojiList = this.reactService.emojiList
  }

  getPosts() {
    this.postService.getPosts(this.id).subscribe({
        next:(data) => {
        this.listPosts= data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      }
    });
  }

  onFilesSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  onButtonHovered(event: any) {
    this.selectedFiles = event.target.files;
  }
  
  save() {
    if (this.selectedFiles && this.selectedFiles.length > 0) {
      this.postService.addWPostFiles(this.post, this.id, this.selectedFiles).subscribe(() => {
        this.getPosts();
        this.post = new Post();
        this.selectedFiles = [];
      }, (error) => {
        console.error(error);
      });
    }
  }  

  showComments(i:number) {
    this.commentService.getCommentsByPost(i).subscribe({
      next:(data) => 
      this.listComments= data.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    }); 
  }

  writeComments(postId:number){
    if (this.comment.content.length > 0) {
      this.commentService.assignCommentToPost(this.comment, postId, this.id).subscribe(() => {
        this.showComments(postId);
        this.comment.content="";
      });
    }
  }

  
}