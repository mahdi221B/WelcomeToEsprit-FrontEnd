import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  id!:number;
  post!:Post;

  constructor(private route:ActivatedRoute,private postService:PostService) { }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.post = new Post();
    this.postService.getPostById(this.id).subscribe({
      next: (data) => {
        console.log(data)
        this.post = data;
      }
    });
  }


}
