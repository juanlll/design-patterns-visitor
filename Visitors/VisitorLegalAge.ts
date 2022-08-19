import { SchoolStudent } from '../Elements/SchoolStudent';
import { UniversityStudent } from '../Elements/UniversityStudent';
import { Visitor } from './Visitor';
export class VisitorLegalAge implements Visitor<boolean> {
  private isLegalAge(age: number): boolean {
    return age >= 18;
  }

  public visitSchoolStudent(student: SchoolStudent): boolean {
    return this.isLegalAge(student.getAge());
  }

  public visitUniversityStudent(student: UniversityStudent): boolean {
    return this.isLegalAge(student.getAge());
  }
}
