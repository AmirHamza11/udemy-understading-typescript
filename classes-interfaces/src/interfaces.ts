interface Greetable {
  readonly name: string;
  gender?: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  greet(phrase: string): void {
    console.log(phrase + this.name);
  }
  name: string;
  age: number = 30;

  constructor(n: string) {
    this.name = n;
  }
}

let user1: Person;

user1 = new Person("hamza");

user1.greet("hi there ");

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
