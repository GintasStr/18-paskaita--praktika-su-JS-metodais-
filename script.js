class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    if (this.age >= 18) {
      console.log(this.name + " " + "pilnametis.");
    } else {
      console.log(this.name + " " + "nepilnametis.");
    }
  }
}

const p1 = new Person("Petras", 19);
console.log(p1.compareAge());

const masyvas1 = [1, 5, "a", "g", "z", 6];
let tikSkaiciai = masyvas1.filter((element) => typeof element === "number");
console.log(tikSkaiciai);
