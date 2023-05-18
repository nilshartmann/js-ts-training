console.log("Please edit index.js");

function helloWorld(name) {
  if (typeof name === "function") {
    name = name();
  }

  if (typeof name !== "string") {
    return null;
  }

  return `Hallo, ${name}`;
}

console.log(1, helloWorld()); // ""
console.log(2, helloWorld(null)); // ""
console.log(3, helloWorld("Susi")); // "Hallo, Susi"
console.log(4, helloWorld("")); // "Hallo, "

function susi() {
  return "Susi";
}

console.log(5, helloWorld(susi)); // Hallo, Susi
