// Manager class extends Employee class inheriting Employee's properties and methods.
const Employee = require('./Employee');
// Manager class has an additional property
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
    };
    // Manager class has additional methods
    getOfficeNumber() {
        return this.officeNumber
    };
    getRole() {
        return "Manager"
    };
};

// Ensures other files will have access to this file
module.exports = Manager
