export default undefined;

class Cache {
  #maxSize;
  #items = {};

  constructor(maxSize) {
    this.#maxSize = maxSize;
  }

  addItem(key, value) {
    if (Object.keys(this.#items).length >= this.#maxSize) {
      throw new Error("Too many items");
    }
    this.#items[key] = value;
  }

  removeItem(key) {
    delete this.#items[key];
  }

  getItem(key, supplier) {
    if (key in this.#items) {
      return this.#items[key];
    }

    if (supplier) {
      return supplier();
    }
  }
}

const c = new Cache(2);
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
