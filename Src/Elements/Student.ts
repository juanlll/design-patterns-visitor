import { Person } from '../../Person';
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

  public getAge() {
    return this.person.age;
  }

  public getFinalQualifications(): Array<Qualification> {
    return this.finalQualifications;
  }

  public getName() {
    return `[${this.constructor.name}] ${this.person.name}`;
  }

  public getTotalWeight(): number {
    return this.getFinalQualifications().reduce(
      (acc: number, qualification: Qualification) => {
        return acc + qualification.weight;
      },
      0
    );
  }
}
