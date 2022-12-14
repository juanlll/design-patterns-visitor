import { Student } from './Student';
import { Visitor } from '../Visitors/Visitor';

export abstract class StudentWithAccept extends Student {
  public abstract accept<T>(visitor: Visitor<T>): T;
}
