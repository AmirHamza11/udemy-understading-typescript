abstract class Department {
  // name: string;
  // private id: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

class ITDepartment extends Department {
  static year: string = "2023";
  admins: string[];
  private static instance: ITDepartment;
  private constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  static getInstance() {
    if (ITDepartment.instance) {
      return this.instance;
    }
    this.instance = new ITDepartment("d1", []);
    return this.instance;
  }

  get getAdmins() {
    return this.admins;
  }

  set setAdmins(value: string) {
    this.admins.push(value);
  }

  static createAdmin(name: string) {
    return { name: name };
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }

  describe(this: Department): void {
    console.log(ITDepartment.year);
  }
}

const it = ITDepartment.getInstance();
it.setAdmins = "hmz";
// console.log(it);

// it.describe();

console.log(it.getAdmins);
