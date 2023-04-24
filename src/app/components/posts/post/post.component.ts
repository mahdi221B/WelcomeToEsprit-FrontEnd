import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  userId!:number;
  listPosts!:Post[];
  post!: Post;
  currentPage = 1;
  constructor(private postService: PostService,private route:Router) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe({
      next:(data) => 
      this.listPosts= data
    });
  }

  delete(id: number){
    this.postService.deletePost(id).subscribe({
      next:() => 
      this.listPosts = this.listPosts.filter((p)=>p.id != id)
    })
  }

  detail(id: number) {
    this.route.navigateByUrl(`/home/post/${id}`);
  }
  update(id: number) {
    this.route.navigateByUrl(`/home/post/update/${id}`);
  }
  getPostComments(id: number) {
    this.route.navigateByUrl(`/home/postcomments/${id}`);
  }

}
