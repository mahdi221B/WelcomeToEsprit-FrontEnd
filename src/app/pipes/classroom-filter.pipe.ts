import { Pipe, PipeTransform } from '@angular/core';
import { classroom } from '../model/classroom';


@Pipe({
  name: 'classroomFilter'
})
export class ClassroomFilterPipe implements PipeTransform {
  transform(classrooms: classroom[], searchText: string): classroom[] {
    if (!classrooms || !searchText) {
      return classrooms;
    }
    const lowerSearchText = searchText.toLowerCase();
    return classrooms.filter(classroom =>
      Object.values(classroom).some(value => 
        value && value.toString().toLowerCase().includes(lowerSearchText)
      )
    );
  }
}
