import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Availablity } from 'src/app/model/availablity';
import { availablityservice } from 'src/app/recruitment-service/availablity-service';

@Component({
  selector: 'app-list-availabtity',
  templateUrl: './list-availabtity.component.html',
  styleUrls: ['./list-availabtity.component.css']
})
export class ListAvailabtityComponent implements OnInit {


  availablity: Availablity = new Availablity()
  listAvailablity!: Availablity[]
  id: number= 2;
  currentPage: number= 2;
  


  constructor(private availablityservice: availablityservice, private route: Router) { }
  ngOnInit(): void {

    this.availablityservice.getAvailablitById(this.id).subscribe(
      res => {
        console.log("res", res);
        this.listAvailablity = res
      }
    )

  }

}
