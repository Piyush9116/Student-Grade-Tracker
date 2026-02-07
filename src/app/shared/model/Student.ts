export interface Grade {
  subject: string;
  score: number;
  date: Date;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  enrollmentDate: Date;
  grades: Grade[];
}
