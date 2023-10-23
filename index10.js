// 10. The following constructor function creates a new Person object with the given name and
// age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
// variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
// third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true
// if the person is old enough to drive.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = this.age >= 18; //part d: Add a canDrive method
  }
  
 
  let person1 = new Person("Chris", 30);  // part a : Create a new person
  
  let person2 = new Person("Tina", 15); // part b : Create a new person
  
  
  console.log(person1);
  console.log(person2); // part c: Print out the properties of each person object to the console
  
  // part d: Rewrite the constructor function as a class called PersonClass
  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.human = true;
    }
    // part d: Add a canDrive method
    canDrive() {  
        const canDriveStatement = this.age >= 18 ? 'can' : 'cannot';
        return `${this.name} is ${this.age} years old and ${canDriveStatement} drive.`;
      }
    }
  
  // create a third person & print
  let person3 = new PersonClass("David", 33);
  let person4 = new PersonClass("Leah", 17);
  
  console.log(person3);
  console.log(person3.canDrive());
  console.log(person4.canDrive());