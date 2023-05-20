console.log("Please edit index.js");

function helloWorld(name) {
  if (name === undefined) {
    throw new Error("Please specify name");
  }

  if (typeof name === "function") {
    name = name();
  }

  if (typeof name !== "string") {
    return null;
  }

  return `Hallo, ${name}`;
}

try {
  console.log(1, helloWorld()); // <-- darf nicht ausgegeben werden
} catch (err) {
  console.log("1 ERROR: ", err.message);
}
console.log(2, helloWorld(null)); // ""
console.log(3, helloWorld("Susi")); // "Hallo, Susi"
console.log(4, helloWorld("")); // "Hallo, "

function susi() {
  return "Susi";
}

console.log(5, helloWorld(susi)); // Hallo, Susi
