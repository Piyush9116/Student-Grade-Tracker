import { Injectable } from '@angular/core';
import { Student, Grade } from '../../model/Student';
import { DUMMY_STUDENTS } from '../../../DUMMY-STUDENTS';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private students: Student[] = [];
  private nextId = 1;

  constructor() {
    this.students = [...DUMMY_STUDENTS];
    this.nextId = this.students.length + 1;

  }

  // ---------------------------
  // STUDENT OPERATIONS
  // ---------------------------

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(name: string, email: string, enrollmentDate: Date): void {
    const newStudent: Student = {
      id: this.nextId++,
      name,
      email,
      enrollmentDate,
      grades: []
    };
    this.students.push(newStudent);
  }

  deleteStudent(studentId: number): void {
    this.students = this.students.filter(
      student => student.id !== studentId
    );
  }

  // ---------------------------
  // GRADE OPERATIONS
  // ---------------------------

  addGrade(studentId: number, grade: Grade): void {
    const student = this.students.find(
      s => s.id === studentId
    );

    if (student) {
      student.grades = [...student.grades, grade];
    }
  }

  // ---------------------------
  // CALCULATIONS
  // ---------------------------

  calculateAverage(grades: Grade[]): number {
    if (!grades || grades.length === 0) {
      return 0;
    }

    const total = grades.reduce(
      (sum, grade) => sum + grade.score,
      0
    );

    return total / grades.length;
  }
}
