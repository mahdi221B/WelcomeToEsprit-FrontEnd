import { Component, OnInit } from '@angular/core';
import { AppEvent } from 'src/app/model/AppEvent';
import { AppEventService } from 'src/app/services/app-event.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  constructor(private appEventService: AppEventService) { }
  appevent!: AppEvent;
  ngOnInit(): void {
    this.appevent = new AppEvent();

  }
  public addEvent() {
    return this.appEventService.addEvent(this.appevent).subscribe((response) => {
      console.log(response);



    });
  }

}
