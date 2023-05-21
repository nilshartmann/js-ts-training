export default undefined;

// - generics
//   - validate mit x | null
//   - tuple mit 2. Variable mit default typen
//   - constraints (mit "Color" als String literal)
// - ÜBUNG CONSTRAINTS

const person = {
  firstname: "Klaus",
  age: 32,
};

type Person = {
  firstname: string;
};

declare function validate<OBJECT extends object, K extends keyof OBJECT>(
  o: OBJECT,
  k: K
): { [KEY in K]: boolean };

const v = validate(person, "age");
v.age;
