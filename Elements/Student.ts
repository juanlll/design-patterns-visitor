import { Person } from '../Person';
export interface Qualification {
  className: string;
  weight: number;
  value: number;
}

export class Student {
  constructor(
    protected person: Person,
    protected finalQualifications: Array<Qualification> = []
  ) {}

  public assignFinalQualifications(qualifications: Qualification[]): void {
    this.finalQualifications = qualifications;
  }

  public getFinalQualifications(): Array<Qualification> {
    return this.finalQualifications;
  }

  public getTotalWeight(): number {
    return this.getFinalQualifications().reduce(
      (acc: number, qualification: Qualification) => {
        return acc + qualification.weight;
      },
      0
    );
  }

  public getName() {
    return `[${this.constructor.name}] ${this.person.name}`;
  }

  public getAge() {
    return this.person.age;
  }
}
