import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';


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
  listPosts$ !: Observable<Post[]>; // Define listPosts$ as an Observable<Post[]>

  constructor(private postService: PostService) { }
  
  ngOnInit(): void {
    this.post = new Post();
    this.listPosts$ = this.postService.getPosts(this.id); // Assign the Observable to listPosts$

  }

  onFilesSelected(event: any) {
    this.selectedFiles = event.target.files;
  }
  
  save(){
    this.postService.addWPostFiles(this.post, this.id, this.selectedFiles).subscribe(
      response => console.log(response),
      error => console.log(error)
    )
  }
}
