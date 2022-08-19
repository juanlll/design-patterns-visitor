import { Student } from '../Elements/Student';
import { Visitor } from '../Visitors/Visitor';

export abstract class StudentWithAccept extends Student {
  abstract accept<T>(visitor: Visitor<T>): T;
}
