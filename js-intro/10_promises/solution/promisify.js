// Kannst Du eine 'promisify'-Funktion schreiben, die eine Funktion mit
//  Node.JS-"Callback-Pattern" entgegennimmt und eine Funktion mit Promises
//  zurückliefert?
//
//    - Für deine 'promisify'-Funktion kannst Du annehmen, dass die übergebene Funktion
//      genau zwei Parameter hat: 1. einen Wert und 2. die Callback-Funktion, so wie
//      "loadData" unten
//      - Du musst also nicht beachten, dass die Funktion beliebig viele Parameter
//        und die Callback-Funktion am Ende haben muss (wie in Node.JS der Fall)
//
// Hier findest Du Beispiele, was funktionieren soll

// Die Signatur der loadData-Funktion entspricht der Signatur, die promisify
//   unterstützen soll: Daten und Callback
function loadData(file, callback) {
  if (!file) {
    return callback("No file specified");
  }

  return callback(undefined, `data from ${file} loaded :-)`);
}

// "Klassiche" Verwendung von loadData mit Callback-Funktion
loadData("", (err, data) => {
  console.log("err", err); // Sollte sein: "No file specified"
  console.log("data", data); // Sollte sein: undefined
});

loadData("hello-world.txt", (err, data) => {
  console.log("err", err); // Sollte sein: undefined
  console.log("data", data); // Sollte sein: "data from hello-world.txt loaded :-)"
});

function promisify(fnWithCallbackSignature) {
  return function (arg) {
    return new Promise((resolve, reject) => {
      fnWithCallbackSignature(arg, (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  };
}

// Verwendung von loadData mit promisify
//   - Wenn deine promisify-Funktion funktioniert, und die
//     Ausgaben auf der Konsole korrekt sind:
//      -> in welcher Reihenfolge erscheinen die Ausgaben
//      -> und warum in dieser Reihenfolge?
const loadDataPromise = promisify(loadData);
console.log("1");
loadDataPromise("hello-world.txt").then(data => console.log("data from promise", data)); // Sollte sein: "data from hello-world.txt loaded :-)"
console.log("2");
loadDataPromise("")
  .then(data => console.log("data from promise", data)) // Sollte nicht aufgerufen werden
  .catch(err => console.log("err from promise", err)); // // Sollte sein: "No file specified"
console.log("3");

// Erwartete Ausgabe:
// 1
// 2
// 3
// data from promise data from hello-world.txt loaded :-)
// err from promise No file specified
