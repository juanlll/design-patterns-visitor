import { StudentWithAccept } from './StudentWithAccept';
import { Visitor } from '../Visitors/Visitor';

export class UniversityStudent extends StudentWithAccept {
  public accept<T>(visitor: Visitor<T>): T {
    return visitor.visitUniversityStudent(this);
  }
}
