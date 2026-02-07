import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GradeCalculatorService } from '../../shared/services/grade-calculator/grade-calculator.service';
import { Student } from '../../shared/model/Student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LetterGradePipe } from '../../shared/pipes/letter-grade/letter-grade.pipe';
import { GradeColorDirective } from '../../shared/directives/grade-color/grade-color.directive';
@Component({
  selector: 'app-student-card',
  imports: [FormsModule, CommonModule, LetterGradePipe, GradeColorDirective],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input() student!: Student;
  @Output() deleteStudent = new EventEmitter<number>();
  @Output() viewDetails = new EventEmitter<Student>();

  constructor(private gradeCalcService: GradeCalculatorService) {}

  get average(): number {
    return this.gradeCalcService.calculateAverage(this.student.grades);
  }

  onDelete(): void {
    this.deleteStudent.emit(this.student.id);
  }

  openDetails(): void {
    this.viewDetails.emit(this.student);
  }
}
