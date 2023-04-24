import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-update-post',
  templateUrl: './add-update-post.component.html',
  styleUrls: ['./add-update-post.component.css']
})
export class AddUpdatePostComponent implements OnInit{

  listposts!:Post[];
  post!: Post;
  id!:number;
  userId:number=2;
  isUpdate!: boolean;
  selectedFiles!: File[];


  constructor(private postService: PostService,private routes:ActivatedRoute ,private route:Router) { }
  
  ngOnInit(): void {
    this.post = new Post();
    this.isUpdate = false;
    this.routes.params.subscribe(params => {
      if (params['id']) {
        this.isUpdate = true;
        this.id = +params['id'];
        this.postService.getPostById(this.id).subscribe({
          next: (data) => {
            console.log(data);
            this.post = data;
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    });
  }

  onFilesSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  saveOrUpdate() {
    if (this.isUpdate) {
      this.postService.updatePost(this.post, this.userId).subscribe({
        next:()=>this.route.navigateByUrl('/home/posts')
      })
    } else {
      this.postService.addWPostFiles(this.post,this.userId,this.selectedFiles).subscribe({
        next:()=>this.route.navigateByUrl('/home/posts')
      })
    }
  }

}