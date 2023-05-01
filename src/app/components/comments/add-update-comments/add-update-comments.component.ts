import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comments } from 'src/app/model/Comment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-add-update-comments',
  templateUrl: './add-update-comments.component.html',
  styleUrls: ['./add-update-comments.component.css']
})
export class AddUpdateCommentsComponent implements OnInit{
  listcomments!:Comments[];
  comment!: Comments;
  id!:number;
  userId:number=2;
  isUpdate!: boolean;

  constructor(private commentService: CommentsService,private routes:ActivatedRoute ,private route:Router) { }

  ngOnInit(): void {
    this.comment = new Comments();
    this.isUpdate = false;
    this.routes.params.subscribe(params => {
      if (params['id']) {
        this.isUpdate = true;
        this.id = +params['id'];
        this.commentService.getCommentsById(this.id).subscribe({
          next: (data) => {
            console.log(data);
            this.comment = data;
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    });
  }

  saveOrUpdate() {
    if (this.isUpdate) {
      this.commentService.addComments(this.comment).subscribe({
        next: ()=> this.route.navigateByUrl('/home/posts')
      })
    } else {
      this.commentService.addComments(this.comment).subscribe({
        next: ()=> this.route.navigateByUrl('/home/posts')
      })
    }
  }
  // this.commentService.updateComments(this.comment, this.id).subscribe({

}