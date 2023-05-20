// Übung: Promises

// loadGreetingFromServer liefert ein Objekt mit einen Gruß für den Namen zurück,
// oder einen Fehler, wenn kein name angegeben wurde.
//  Diese Funktion ist "fertig", die musst Du nur verwenden.
//
// Im Erfolgsfall liefert die Funktion ein Promise zurückgegeben, das zum folgenden
// Objekt aufgelöst wird { phrase: ..., name: ... }

// 1. Vervollständige getGreetingAsString (s.u.)
// 2. Vervollständige die Aufrufe von getGreetingAsString (s.u.)

function loadGreetingFromServer(name) {
  // Diese Funktion steht exemplarisch für eine asynchrone Funktion,
  // die z.B. eine Bibliothek zur Verfügung stellt.
  // In der Regel wirst Du Promises selbst nicht erzeugen müssen,
  // sondern nur mit Promise-Objekten arbeiten, die Du von einer Funktion
  // zurückgeliefert bekommst
  return new Promise((resolve, reject) => {
    const timeout = name ? 500 : 250;

    setTimeout(() => {
      if (!name) {
        return reject("Must specify name");
      }
      return resolve({
        phrase: "Hello",
        name
      });
    }, timeout);
  });
}

function getGreetingAsString(name) {
  // Implementiere diese Funktion
  // Die Funktion soll loadGreetingFromServer mit 'name' aufrufen und
  //   - im Erfolgsfall einen STRING zurückliefern, in dem die Daten des von
  //     loadGreetingFromServer zurückgelieferte Greeting-Objekts in irgendeiner
  //     Form enthalten sind (String mit einem "Gruß")
  //   - im Fehlerfall einen String zurückliefern mit einer Fehlermeldung
  //      "could not greet" o.ä.
  //
  // Du kannst Promise-Ketten oder async/await API verwenden
}

// Führe getGreetingAsString aus und gib das Ergebnis auf der Konsole aus
//   - Im ersten Fall ("Susi") sollte die Meldung mit dem Gruß erscheinen
//   - Im zweiten Fall ("null") sollte eine Fehlermeldung erscheinen
//

getGreetingAsString("Susi");
getGreetingAsString(null);

// Hier ist eine Liste von Namen, die alle mit "getGreetingAsString"
//   gegrüßt werden sollen.
// Das Ergebnis (alle Grüße) sollen auf einmal ausgegeben werden,
//  sobald ALLE Grüße erzeugt worden sind. Wie geht das?
const names = ["Klaus", "Susi", "Ursel"];
