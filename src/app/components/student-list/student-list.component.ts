import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from '../../shared/model/Student';
import { StudentServiceService } from '../../shared/services/student-service/student-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from '../student-card/student-card.component';
import { FilterByPerformancePipe } from '../../shared/pipes/filter-by-performance/filter-by-performance.pipe';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { AddStudentComponent } from '../add-student/add-student.component';
// import { StudentCardComponent } from '../student-card/student-card.component';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, FormsModule, StudentCardComponent, FilterByPerformancePipe,StudentDetailsComponent,AddStudentComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  selectedFilter = 'All';
  selectedStudentForPopup: Student | null = null;

  constructor(private studentService: StudentServiceService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  onDeleteStudent(studentId: number): void {
    this.studentService.deleteStudent(studentId);
    this.students = this.studentService.getStudents();
  }

  trackByStudentId(index: number, student: Student): number {
    return student.id;
  }

  setFilter(filter: string): void {
    this.selectedFilter = filter;
  }

  openStudentDetails(student: Student): void {
    this.selectedStudentForPopup = student;
  }

  closePopup(): void {
    this.selectedStudentForPopup = null;
  }
}
