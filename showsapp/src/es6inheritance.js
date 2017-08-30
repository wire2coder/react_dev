// class inheritance
// make a new 'class' call employee

class Employee {

    constructor(firstName, lastName) {
        // attaching property to the object
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return (`${this.firstName} ${this.lastName} `)
    }

} // class

emp1 = new Employee('Vicent', 'Kelly');
// console.log( emp1.getFullName() );


// now make another class call Engineer that 
// inherit properties from Employee class
class Engineer extends Employee {

    // inherit stuff from Employee class
    constructor(firstName, lastName, engType) {

        // call the 'super'/Employee class
        super(firstName, lastName);
        this.engType = engType;
    }

    getEngType() {
        return (`This person is a ${this.engType}`);
    }

} // class

var eng1 = new Engineer('Patrick', 'Crudeup', 'Operations Engineer')
var eng2 = new Engineer('Patrick2', 'Crudeup2', 'Operations Engineer')

Engineer.test1 = function() {
    console.log('test1');
}

Engineer.test1();
// console.log(eng2);

// console.log(eng1.getEngType());