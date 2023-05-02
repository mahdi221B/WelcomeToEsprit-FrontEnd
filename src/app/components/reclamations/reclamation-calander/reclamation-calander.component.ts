import { Component } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { Reclamation } from 'src/app/model/Reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-reclamation-calander',
  templateUrl: './reclamation-calander.component.html',
  styleUrls: ['./reclamation-calander.component.css']
})
export class ReclamationCalanderComponent{
   calendar!: Calendar;
calendarOptions: any;

Claims!: Reclamation[];


ngOnInit(): void {
  this.getALLRDV();
  const calendarEl = document.getElementById('calendar1');
  if (calendarEl) {
    this.calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin],
      events: []
    });
    this.calendar.render();}
}
idRDV!: number;
date!: Date;

constructor(private ReclamationService: ReclamationService){
}

onSubmit() {
  }
  getALLRDV() {
    this.ReclamationService.getAllReclamation().subscribe((res) => {
      if (Array.isArray(res)) {  // vérifier si res est un tableau
        this.Claims = res;
        this.calendar.addEventSource(this.Claims.map(c => {  // utiliser map() si this.RDV est un tableau
          return {
            title: `Claim ${c.id}`,
            start: c.creationDate ,end:c.creationDate
          }
        }));
      }
    });
}}


