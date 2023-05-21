export default undefined;

// Uebung: typeof, Union Types, Type Guards

// - Unten findest Du vier Variablen (firstname, person, employee, sayHello-Funktion)
// - Außerdem eine Funktion "handle"
//   - Diese Funktion hat einen Parameter vom Typ "any"
//   - Das wollen wir vermeiden!
//   - Kannst Du den Typen für die Funktion so hinschreiben,
//     dass die Funktion jeweils eine der vier Variablen akzeptiert?
// - Verwende dazu Union Typen und den typeof-Operator
//   - Beispiele zur (in)korrekten Verwendung findest Du unten
//
// Schritt 2: Verwenden des Parameters in der Funktion
// - In der Funktion findest Du eine Beschreibung, was jeweils
//   passieren soll, abhängig vom übergebenen Typen
// - Vervollständige die Implementierung so, dass keine
//   Compile-Fehler auftreten
//
// Hinweis:
// - Du brauchst diese Datei nicht auszuführen. Es reicht,
//   wenn sie keine Compile-Fehler mehr hat!

let firstname = "Klaus";
let person = {
  firstname: "Susi"
};

let employee = {
  company: "Hier GmbH"
};

let sayHello = function (firstname: string, lastname: string) {
  return `Hello ${firstname} ${lastname}`;
};

// Diese Funktion soll nur Typen der vier oben stehenden
//  Variablen entgegennehmen dürfen
function handle(a: typeof firstname | typeof person | typeof sayHello | typeof employee): string {
  // Verwende Type Guards, um jeweils abhängig vom übergebenen Typ
  // Werte zurück zu geben:
  //
  // - wenn a ein String ist: return return `Hello ${a.toUpperCase()}`;
  // - wenn a eine Funktion ist: return a("Klaus", "Meier");
  // - wenn a ein "employee" ist: return `You're working at ${a.company}`;
  // - wenn a eine person ist: return `Hello ${a.firstname}`;
  //
  // - Wenn Du alle Fälle korrekt behandelt hast, kannst Du den Rückgabe-Typ
  //   dieser handle-Funktion auf "string" setzen. Es sollten dann keine Comile-
  //   Fehler in dieser Funktion auftreten

  if (typeof a === "string") {
    return `Hello ${a.toUpperCase()}`;
  }
  if (typeof a === "function") {
    return a("Klaus", "Meier");
  }
  if ("company" in a) {
    return `You're working at ${a.company}`;
  }

  return `Hello ${a.firstname}`;
}

// Diese Aufrufe sollen erlaubt sein:

handle({
  firstname: "Susi"
}); // ok: Person
handle({
  company: "TypeScript Intl."
}); // ok: Company
handle(firstname);
handle("Susi"); // ok: string
handle(sayHello); // ok: Funktion
handle((a: string, b: string) => "Hallo"); // OK: Funktion
handle((a: string, b: string, c?: number) => "Hallo"); // OK: Funktion

// Diese Aufrufe dürfen nicht gehen,
// hier sollen TypeScript-Fehler kommen:
handle(null); // ERR: null nicht erlaubt
handle("Klaus", 32); // ERR: zwei Parameter
handle(); // ERR kein Parameter
handle(() => 7); // ERR, Falsche Funktionssignatur
handle((a: string, b: string, c: string) => `${a}{b}{c}`); // ERR, Falsche Funktionssignatur
