import { SchoolStudent } from '../Elements/SchoolStudent';
import { Qualification, Student } from '../Elements/Student';
import { UniversityStudent } from '../Elements/UniversityStudent';
import { Visitor } from '../Visitors/Visitor';
export class VisitorFinalGradeBasic implements Visitor<number> {
  public visitSchoolStudent(student: SchoolStudent): number {
    return this.calculate(student);
  }

  public visitUniversityStudent(student: UniversityStudent): number {
    return this.calculate(student);
  }

  private calculate(student: Student) {
    return (
      student
        .getFinalQualifications()
        .reduce((acc: number, qualification: Qualification) => {
          return acc + qualification.value * qualification.weight;
        }, 0) / student.getTotalWeight()
    );
  }
}
