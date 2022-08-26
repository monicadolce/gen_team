// Intern class extends Employee class inheriting Employee's properties and methods.
const Employee = require('./Employee');
// Manager class has an additional property and method
class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email, school);
        this.school = school;
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }
}
// Intern class has additional properties and methods

// school      UCLA   Intern
// getSchool()
// getRole() overriden to return 'Intern'

module.exports = Intern