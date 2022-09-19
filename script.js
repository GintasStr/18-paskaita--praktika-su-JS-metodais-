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
