// const person: {
//   name: string;
//   age: number;
// } = {

enum roleEnum {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  roleTuple: [number, string];
  roleEnum: number;
} = {
  name: "hamza",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  roleTuple: [2, "author"],
  roleEnum: roleEnum.AUTHOR,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);
