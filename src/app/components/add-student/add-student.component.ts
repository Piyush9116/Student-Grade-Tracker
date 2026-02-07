import { Component } from '@angular/core';
import { StudentServiceService } from '../../shared/services/student-service/student-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-student',
  imports: [FormsModule,CommonModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  name = '';
  email = '';
  enrollmentDate = '';

  constructor(private studentService: StudentServiceService) {}

  addStudent(form: any): void {
    if (form.invalid) {
      return;
    }

    this.studentService.addStudent(
      this.name,
      this.email,
      new Date(this.enrollmentDate)
    );

    form.resetForm();
  }
}
