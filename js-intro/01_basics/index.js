console.log("Please edit index.js");

// 1. Schreibe eine 'helloWorld'-Funktion
//   Die Funktion soll einen Parameter entgegen nehmen, der "name" heißt
//     - Wenn die Funktion OHNE Parameter aufgerufen wird,
//       soll ein Error mit einer Fehlermeldung geworfen werden ("no name specified" o.ä.)
//
//     - Wenn der übergebene Parameter KEIN String ist,
//       soll die Funktion einen Leerstring zurückliefern
//
//       Den Typen einer Variablen oder eines Parameters kannst Du mit "typeof" ermitteln.
//       "typeof" liefert dir einen String zurück, der den Typ angibt
//       z.B: console.log(typeof "Moin"); // "string"
//
//     - Ansonsten (Parameter ist ein String): liefer einen Gruß (z.B. "Hallo, ...Name..." zurück)
//       - Verwende Template-Strings, um den Gruß zu erzeugen
//
// 2. Rufe die Funktion mit unterschiedlichen Werten auf und gib das Ergebnis auf der Konsole aus
//     - Konsolen-Ausgaben kannst Du mit console.log machen: console.log("...");
//     - Für helloWorld("Susi") sollte "Hallo, Susi" erscheinen
//     - Für helloWorld(2021) sollte "" erscheinen
//     - Für helloWorld() sollte eine Exception fliegen. Fange die Exception und gib die Meldung aus
//
// 3. Erweitere die Funktion
//     - Wenn der übergebene Parameter eine (Callback-)Funktion (!) ist, soll diese Funktion den Namen
//       der zu grüßenden Person zurückliefern
//     - Wenn der Parameter eine Callback-Funktion ist, rufe also die Callback-Funktion auf und "grüße"
//       den zurückgelieferten Namen
//     - Für helloWorld( () => "Susi" ) sollte "Hallo, Susi" erscheinen
