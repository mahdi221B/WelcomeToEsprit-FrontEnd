import { Component,Input,OnInit } from '@angular/core';
import { ApplicationForm } from 'src/app/model/applicationForm';
import { ApplicationFormsServices } from 'src/app/recruitment-service/ApplicationFormservice';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  applicationForm = new ApplicationForm() ;
  @Input() idApp! : number  ;

  constructor(private applicationFormService : ApplicationFormsServices) { }


  ngOnInit(): void {
   
    }


    addApp(){
      this.applicationFormService.createFormulaire(this.applicationForm,this.idApp ).subscribe((response)=>{
        console.log('response' , response);
        
       })
    }

}
