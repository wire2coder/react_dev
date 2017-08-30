// Function constructor with function expression
var Employee = function(firstname, lastname) {
    // object.firstname, attaching firstname property to object
    this.firstname = firstname;
    this.lastname = lastname;
};

// prototypal inheritance
Employee.prototype.getFullName = function() {
    return (this.firstname + ' ' + this.lastname);
}

// // make a new copy/object
var emp1 = new Employee('Jimmmy', 'Zakik');
console.log(  emp1.getFullName() );

// // Use ES6 class syntax sugar to create a 'class'
class EmployeeES6 {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName() {
        return (this.firstname + ' ' + this.lastname);
    }
    
} // class Employee

var emp2 = new EmployeeES6('Steven', 'Mina');
console.log(emp2.getFullName());
