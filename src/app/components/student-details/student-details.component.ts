import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Student } from '../../shared/model/Student';
import { GradeCalculatorService } from '../../shared/services/grade-calculator/grade-calculator.service';
import { LetterGradePipe } from '../../shared/pipes/letter-grade/letter-grade.pipe';
import { GradeColorDirective } from '../../shared/directives/grade-color/grade-color.directive';
import { GradeFormComponent } from '../grade-form/grade-form.component';
import { GpaCalculatorPipe } from '../../shared/pipes/gpa-calculator/gpa-calculator.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-details',
  imports: [LetterGradePipe, GradeColorDirective, GradeFormComponent, GpaCalculatorPipe, CommonModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnChanges {

  @Input() student!: Student;
  @Output() close = new EventEmitter<void>();

  average = 0;

  constructor(private gradeCalcService: GradeCalculatorService) {}

  ngOnChanges(): void {
    this.average = this.gradeCalcService.calculateAverage(this.student.grades);
  }

  closeDetails(): void {
    this.close.emit();
  }
}
