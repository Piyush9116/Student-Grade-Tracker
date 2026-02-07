import { Injectable } from '@angular/core';
import { Student,Grade } from '../../model/Student';

@Injectable({
  providedIn: 'root'
})
export class GradeCalculatorService {

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

  calculateGPA(grades: Grade[]): number {
    if (!grades || grades.length === 0) {
      return 0;
    }

    const totalPoints = grades.reduce(
      (sum, grade) => sum + this.scoreToGpaPoint(grade.score),
      0
    );

    return totalPoints / grades.length;
  }

  private scoreToGpaPoint(score: number): number {
    if (score >= 90) return 4.0;
    if (score >= 75) return 3.0;
    if (score >= 55) return 2.0;
    if (score >= 40) return 1.0;
    return 0.0;
  }

  // ---------------------------
  // CLASS LEVEL STATISTICS
  // ---------------------------

  getClassAverage(students: Student[]): number {
    if (!students || students.length === 0) {
      return 0;
    }

    const total = students.reduce(
      (sum, student) =>
        sum + this.calculateAverage(student.grades),
      0
    );

    return total / students.length;
  }

  getTopPerformer(students: Student[]): Student | null {
    if (!students || students.length === 0) {
      return null;
    }

    return students.reduce((top, current) =>
      this.calculateAverage(current.grades) >
        this.calculateAverage(top.grades)
        ? current
        : top
    );
  }

  getLowestPerformer(students: Student[]): Student | null {
    if (!students || students.length === 0) {
      return null;
    }

    return students.reduce((lowest, current) =>
      this.calculateAverage(current.grades) <
        this.calculateAverage(lowest.grades)
        ? current
        : lowest
    );
  }

  // ---------------------------
  // PERFORMANCE CATEGORY
  // ---------------------------

  getPerformanceLevel(average: number): string {
    if (average >= 90) return 'Excellent';
    if (average >= 70) return 'Good';
    if (average >= 40) return 'Average';
    return 'Poor';
  }
}
