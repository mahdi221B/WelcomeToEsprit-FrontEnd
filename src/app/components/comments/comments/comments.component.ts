import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comments } from 'src/app/model/Comment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  id!:number;
  listComments!:Comments[];
  currentPage = 1;
 
  constructor(private commentService: CommentsService, private route:Router,private activatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.commentService.getCommentsByPost(this.id).subscribe({
      next: (data) => {
        console.log(data)
        this.listComments=data
      }
    });
  }

  delete(id: number){
    this.commentService.deleteComments(id).subscribe({
      next:() => 
      this.listComments = this.listComments.filter((p)=>p.id != id)
    })
  }

  update(id: number) {
    this.route.navigateByUrl(`/home/comments/update/${id}`);
  }
}