import { StudentWithAccept } from './StudentWithAccept';
import { Visitor } from '../Visitors/Visitor';

export class SchoolStudent extends StudentWithAccept {
  public weightFixed: number = 1;
  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitSchoolStudent(this);
  }
}
