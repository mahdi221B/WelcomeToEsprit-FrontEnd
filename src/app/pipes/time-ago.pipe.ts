import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'timeAgo',
  pure: true
})
export class TimeAgoPipe implements PipeTransform {
  value!:string;
  
  constructor(private datePipe: DatePipe) {}

  transform(value1: Date): string {
    this.value=value1.toString();
    if (!this.value) {
      return ''; // or some other default this.value
    }

    const now = new Date();
    const date = new Date(this.value);
    const diff = Math.round((now.getTime() - date.getTime()) / 60000); // difference in minutes
    if (diff < 1) {
      return 'just now';
    } else if (diff < 60) {
      return `${diff} mins ago`;
    } else if (diff < 1440) {
      return `${Math.floor(diff / 60)} hrs ago`;
    } else {
      return this.datePipe.transform(date, 'MMM d, y') || ''; // or some other default this.value
    }
  }
}
