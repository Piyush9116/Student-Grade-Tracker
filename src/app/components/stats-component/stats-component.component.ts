import { Component, OnInit, DoCheck } from '@angular/core';
import { StudentServiceService } from '../../shared/services/student-service/student-service.service';
import { Student } from '../../shared/model/Student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-component',
  imports: [CommonModule],
  templateUrl: './stats-component.component.html',
  styleUrl: './stats-component.component.css'
})
export class StatsComponentComponent implements OnInit, DoCheck {
  totalStudents = 0;
  classAverage = 0;
  topperName = '';
  topperScore = 0;

  constructor(private studentService: StudentServiceService) {}

  ngOnInit(): void {
    this.calculateStats();
  }

  ngDoCheck(): void {
    this.calculateStats();
  }

  private get students(): Student[] {
    return this.studentService.getStudents();
  }

  calculateStats(): void {
    const students = this.students;
    this.totalStudents = students.length;

    let totalAvg = 0;
    let validCount = 0;

    this.topperScore = 0;
    this.topperName = '';

    students.forEach(student => {
      const avg = this.studentService.calculateAverage(student.grades);

      if (avg > 0) {
        totalAvg += avg;
        validCount++;
      }

      if (avg > this.topperScore) {
        this.topperScore = avg;
        this.topperName = student.name;
      }
    });

    this.classAverage = validCount > 0 ? totalAvg / validCount : 0;
  }
}
