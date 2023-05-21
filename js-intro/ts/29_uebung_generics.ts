export default undefined;

//
// Implementiere eine generische Wrapper-Klasse
//
//  Die Idee dieser Klasse:
//  - Man tut da ein Objekt rein und dann gibt es zwei Methoden
//    1. eine Methode zum Auslesen eines Properties aus dem Objekt
//    2. eine Methode zum Registrieren eines Listeners an dem Objekt
//
//
//  - Die Klasse soll ein beliebiges object als Feld enthalten
//    - Dieses Objekt soll im Konstruktur übergeben bzw. gesetzt werden
//
//  - An der Klasse soll es zwei Methoden geben:
//     - getProperty(propertyName): "propertyName" soll ein gültiger
//       Key-Name aus dem gewrappten Objekt sein
//       Zurückgeliefert wird dann der entsprechende Eintrag aus dem Objekt
//     - addListener(propertyName, listenerFn): Auch hier soll "propertyName"
//       ein gültiger Key aus dem gewrappten Object sein.
//       "listenerFn" soll eine Callback-Funktion mit einem Parameter sein ("newValue")
//       Dieser newValue-Parameter soll vom Typ des Eintrags aus dem gewrappten
//       Objekt sein, das mit propertyName angegeben ist
//
//  - Du findest Beispiele, welcher Code funktionieren sollte weiter unten
//
//  - Du musst die beiden Methoden nicht implementieren, es geht nur um
//    die korrekten Typ-Angaben

class Wrapper {}

const person = {
  firstname: "Klaus",
  age: 32
};

const w = new Wrapper(person); // OK
const shouldBeNumber: number = w.getProperty("age"); // OK
const shouldBeString: string = w.getProperty("firstname"); // OK
w.getProperty("lastname"); // ERR Argument of type '"lastname"' is not assignable to parameter of type '"firstname" | "age"'
w.addListener("firstname", (newLastname: string) => {}); // OK
w.addListener("firstname", (newLastname: boolean) => {}); // ERR: Types of parameters 'newLastname' and 'newValue' are incompatible.
// Type 'string' is not assignable to type 'boolean'

w.addListener("age", (newAge: number) => {}); // OK
w.addListener("age", (newAge: string) => {}); // ERR: Types of parameters 'newAge' and 'newValue' are incompatible.
// Type 'number' is not assignable to type 'string'
