import { SchoolStudent } from './Src/Elements/SchoolStudent';
import { StudentWithAccept } from './Src/Elements/StudentWithAccept';
import { UniversityStudent } from './Src/Elements/UniversityStudent';
import { Person } from './Person';
import { VisitorFinalGradeUCC } from './Src/Visitors/VisitorFinalGradeUCC';
import { VisitorLegalAge } from './Src/Visitors/VisitorLegalAge';
import { VisitorSendEmail } from './Src/Visitors/VisitorSendEmail';

class Ascesor {
  /**
   *
   *
   * @param {StudentWithAccept[]} students
   * @return {*}  {Array<String>}
   * @memberof Ascesor
   */
  public getCalificationsFromStudents(
    students: StudentWithAccept[]
  ): Array<String> {
    return students.reduce((acc, student: StudentWithAccept) => {
      return [
        ...acc,
        `El ${student.getName()} tuvo una calificación de (${student
          .accept<number>(new VisitorFinalGradeUCC())
          .toFixed(2)})`,
      ];
    }, []);
  }

  /**
   *
   *
   * @param {StudentWithAccept[]} students
   * @return {*}  {Array<String>}
   * @memberof Ascesor
   */
  public getWithLegalAgeFromStudents(
    students: StudentWithAccept[]
  ): Array<String> {
    return students.reduce((acc, student: StudentWithAccept) => {
      return student.accept<boolean>(new VisitorLegalAge())
        ? [...acc, `El ${student.getName()} tiene (${student.getAge()}) años`]
        : acc;
    }, []);
  }

  /**
   *
   *
   * @param {StudentWithAccept[]} students
   * @memberof Ascesor
   */
  public sendEmailToStudents(students: StudentWithAccept[]): void {
    students.forEach((student: StudentWithAccept) => {
      student.accept<void>(new VisitorSendEmail());
    });
  }
}

const ascesor = new Ascesor();

const students = [
  new UniversityStudent(new Person('johan', 22), [
    {
      className: 'Math',
      weight: 4,
      value: 1.5,
    },
  ]),
  new SchoolStudent(new Person('maria', 18), [
    {
      className: 'Math',
      weight: 4,
      value: 1.5,
    },
  ]),
];

// obtener todas las calificaicones finales de los estudiantes
const qualifications: Array<String> =
  ascesor.getCalificationsFromStudents(students);
qualifications.forEach((q) => console.log(q));

// obtener todos los estudiantes que son mayores de edad
const studentsLegalAge: Array<String> =
  ascesor.getWithLegalAgeFromStudents(students);
studentsLegalAge.forEach((q) => console.log(q));

// Envia correos a estudiantes
console.log(ascesor.sendEmailToStudents(students));
