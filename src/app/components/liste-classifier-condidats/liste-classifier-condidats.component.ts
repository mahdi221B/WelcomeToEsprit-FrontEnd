import { Component , OnInit } from '@angular/core';
import { condidat } from 'src/app/model/condidat.model';
import { CondidatService } from 'src/app/recruitment-service/condidats-service';

@Component({
  selector: 'app-liste-classifier-condidats',
  templateUrl: './liste-classifier-condidats.component.html',
  styleUrls: ['./liste-classifier-condidats.component.css']
})
export class ListeClassifierCondidatsComponent implements OnInit {

  condidats! : condidat[]


  constructor(private condidatService : CondidatService ){}

  ngOnInit(): void {

    this.condidatService.getCondidats().subscribe((data)=> {
      this.condidats=data
      console.log('condidats', data);
      
    })
  }
}
