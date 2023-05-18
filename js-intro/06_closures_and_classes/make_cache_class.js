export default undefined; // workaround, bitte ignorieren

// Implementiere einen einfachen Cache (Key-Value-Paare): einmal als Klasse und einmal als Closure
//
// Die Aufgabe/Fachlichkeit ist jeweils gleich, nur deine Implementierung ist natürlich
// jeweils eine andere (einmal als Closure, einmal als Klasse)
//
// Der Cache soll aus drei Methoden bestehen:
//  - addItem(key, value)  fügt einen Eintrag dem Cache hinzu
//  - getItem(key, supplierFn) liest einen Eintrag aus dem Cache
//  - removeItem(key): löscht einen Eintrag aus dem Cache
//
// Hinweis zu addItem:
//  - der Cache soll eine maxSize beim Erzeugen bekommen. Wenn addItem
//    aufgerufen wird, aber es sind bereits maxSize Items im Cache,
//    soll ein Fehler geworfen werden (throw new Error("..."))

// Hinweis zu getItem:
//  - getItem hat zwei Parameter: key und supplierFn
//     - key ist der Key des Eintrags, der abgefragt wird
//     - supplierFn ist optional.
//       - Wenn die supplierFn angegeben ist UND es keinen Eintrag für den Key
//         gibt, soll supplierFn aufgerufen werden, und deren Rückgabewert
//         zurückgeliefert werden
//         Idee: damit kann der Aufrufer Default-Werte erzeugen, wenn ein Key
//         nicht vorhanden ist
//     - Ist der abgefragte Key nicht vorhanden und es ist keine supplierFn
//         angegeben, soll undefined zurückgeliefert werden

// Implementiere in dieser Datei die class-Version.
//
// Danach sollen folgende Aufrufe funktionieren:

const c = new Cache(2); // maxSize = 2
c.addItem("klaus", "Klaus Müller");
c.addItem("susi", "Susi Schmidt");

console.log("Klaus", c.getItem("klaus")); // Erwartet: "Klaus Müller"
console.log(c.getItem("peter", () => "Peter !!")); // Erwartet: "Peter !!"

const c2 = new Cache(3);
console.log(c2.getItem("klaus")); // Erwartet: undefined

c.removeItem("klaus");
console.log(c.getItem("klaus")); // Erwartet: undefined

c.addItem("peter", "Peter Pan");
c.addItem("fritz", "Fischers Fritz"); // Erwartet: error
