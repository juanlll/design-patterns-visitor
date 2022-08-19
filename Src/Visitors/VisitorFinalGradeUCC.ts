import { SchoolStudent } from '../Elements/SchoolStudent';
import { Qualification } from '../Elements/Student';
import { UniversityStudent } from '../Elements/UniversityStudent';
import { Visitor } from './Visitor';
export class VisitorFinalGradeUCC implements Visitor<number> {
  public visitSchoolStudent(student: SchoolStudent): number {
    return (
      student
        .getFinalQualifications()
        .reduce((acc: number, qualification: Qualification) => {
          return acc + qualification.value * student.weightFixed;
        }, 0) / student.getFinalQualifications().length
    );
  }

  public visitUniversityStudent(student: UniversityStudent): number {
    return (
      student
        .getFinalQualifications()
        .reduce((acc: number, qualification: Qualification) => {
          return acc + qualification.value * qualification.weight;
        }, 0) / student.getTotalWeight()
    );
  }
}
