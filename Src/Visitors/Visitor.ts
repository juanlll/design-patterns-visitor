import { SchoolStudent } from '../Elements/SchoolStudent';
import { UniversityStudent } from '../Elements/UniversityStudent';

export interface Visitor<T> {
  visitUniversityStudent(student: UniversityStudent): T;
  visitSchoolStudent(student: SchoolStudent): T;
}
