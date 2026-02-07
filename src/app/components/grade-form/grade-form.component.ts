import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentServiceService } from '../../shared/services/student-service/student-service.service';
import { Student } from '../../shared/model/Student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grade-form',
  imports: [FormsModule],
  templateUrl: './grade-form.component.html',
  styleUrl: './grade-form.component.css'
})
export class GradeFormComponent {
  @Input() student!: Student;
  @Output() gradeAdded = new EventEmitter<void>();
  subject = '';
  score!: number;

  constructor(private studentService: StudentServiceService) {}

  addGrade(form: any): void {
    if (form.invalid) {
      return;
    }

    this.studentService.addGrade(this.student.id, {
      subject: this.subject,
      score: this.score,
      date: new Date()
    });

    this.gradeAdded.emit();
    form.resetForm();
  }
}
