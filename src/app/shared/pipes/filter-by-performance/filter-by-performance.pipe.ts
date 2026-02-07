import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../model/Student';

@Pipe({
  name: 'filterByPerformance'
})
export class FilterByPerformancePipe implements PipeTransform {

  transform(students: Student[], filter: string): Student[] {
    if (!filter || filter === 'All') return students;

    return students.filter(student => {
      const avg =
        student.grades.length === 0
          ? 0
          : student.grades.reduce((s, g) => s + g.score, 0) /
            student.grades.length;

      switch (filter) {
        case 'Excellent': return avg >= 85;
        case 'Good': return avg >= 70 && avg < 85;
        case 'Average': return avg >= 40 && avg < 70;
        case 'Poor': return avg < 40;
        default: return students;
      }
    });
  }

}
