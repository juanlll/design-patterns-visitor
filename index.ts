import { SchoolStudent } from './Elements/SchoolStudent';
import { StudentWithAccept } from './Elements/StudentWithAccept';
import { UniversityStudent } from './Elements/UniversityStudent';
import { Person } from './Person';
import { VisitorFinalGradeUCC } from './Visitors/VisitorFinalGradeUCC';
import { VisitorLegalAge } from './Visitors/VisitorLegalAge';
console.clear();
class Ascesor {
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

  public getWithLegalAgeFromStudents(
    students: StudentWithAccept[]
  ): Array<String> {
    return students.reduce((acc, student: StudentWithAccept) => {
      const list = student.accept<boolean>(new VisitorLegalAge())
        ? [...acc, `El ${student.getName()} tiene (${student.getAge()}) años`]
        : acc;
      return list;
    }, []);
  }
}

const ascesor = new Ascesor();

const qualifications: Array<String> = ascesor.getCalificationsFromStudents([
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
]);

qualifications.forEach((q) => console.log(q));

const studentsLegalAge: Array<String> = ascesor.getWithLegalAgeFromStudents([
  new UniversityStudent(new Person('johan', 15), [
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
]);

studentsLegalAge.forEach((q) => console.log(q));
