import { Pipe, PipeTransform } from '@angular/core';
import { Grade } from '../../model/Student';

@Pipe({
  name: 'gpaCalculator'
})
export class GpaCalculatorPipe implements PipeTransform {

  transform(grades: Grade[]): number {
    if (!grades || grades.length === 0) return 0;

    const total = grades.reduce((sum, g) => sum + g.score, 0);
    const average = total / grades.length;

    // GPA scale (10 point)
    return average / 10;
  }

}
