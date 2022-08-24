// Intern class extends Employee class inheriting Employee's properties and methods.
const Employee = require('./employee');
// Manager class has an additional property and method
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email, school);
        this.school = school;
    }
}
// Intern class has additional properties and methods

// school
// getSchool()
// getRole() overriden to return 'Intern'