import { SchoolStudent } from '../Elements/SchoolStudent';
import { Qualification } from '../Elements/Student';
import { UniversityStudent } from '../Elements/UniversityStudent';
import { Visitor } from './Visitor';
export class VisitorFinalGradeBasic implements Visitor<number> {
  private calculate(student: SchoolStudent | UniversityStudent) {
    return (
      student
        .getFinalQualifications()
        .reduce((acc: number, qualification: Qualification) => {
          return acc + qualification.value * qualification.weight;
        }, 0) / student.getTotalWeight()
    );
  }

  public visitSchoolStudent(student: SchoolStudent): number {
    return this.calculate(student);
  }

  public visitUniversityStudent(student: UniversityStudent): number {
    return this.calculate(student);
  }
}
