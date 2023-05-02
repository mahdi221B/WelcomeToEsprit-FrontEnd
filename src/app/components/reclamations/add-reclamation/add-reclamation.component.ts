import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamation } from 'src/app/model/Reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { EditorComponent } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {

  reclamation!:Reclamation;
  listType!:String[];
  listStatus!:String[];
  description!: string;
  @ViewChild('myEditor') editor!: EditorComponent;
  //@ViewChild('toastElement') toastElement: any;
  plainTextContent: string = '';

  constructor(private reclamationService:ReclamationService, private route:Router) {}

  ngOnInit(): void {
    this.reclamation= new Reclamation();
    
  }
  getContent() {
    const content = this.editor.editor.getContent();
    this.plainTextContent = content.replace(/<[^>]*>/g, '');
  }

 
  save(){
    this.getContent(); // Call getContent() to retrieve the plain text content of the editor
    this.reclamation.description = this.plainTextContent; // Set the description property of the reclamation to the plain text content
    this.reclamationService.addReclamation(this.reclamation).subscribe({
      next:()=>this.route.navigateByUrl('/home/reclamation')
    });
  }

}
