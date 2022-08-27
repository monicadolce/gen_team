// Intern class extends Employee class inheriting Employee's properties and methods.
const Employee = require('./Employee');
// Intern class has an additional property
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.school = school;

    };
    // Intern class has additional methods
    getSchool() {
        return this.school
    };
    getRole() {
        return "Intern"
    };
};

// Ensures other files will have access to this file
module.exports = Intern