import { SchoolStudent } from '../Elements/SchoolStudent';
import { UniversityStudent } from '../Elements/UniversityStudent';
import { Visitor } from './Visitor';
export class VisitorSendEmail implements Visitor<void> {
  public visitSchoolStudent(student: SchoolStudent): void {
    console.log('Correo Enviado A' + student.getName());
  }

  public visitUniversityStudent(student: UniversityStudent): void {
    console.log('Correo Enviado A' + student.getName());
  }
}
