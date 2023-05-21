export default undefined;
type Person = { firstname: string };
const person = { firstname: "Klaus" };
const employee = {
  sayHello(this: Person) {
    return this.firstname;
  }
};

employee.sayHello(); // The 'this' context of type '...'
// is not assignable to method's 'this' of type 'Person'.

const sayHello = employee.sayHello.bind(person);

console.log(sayHello()); // OK
