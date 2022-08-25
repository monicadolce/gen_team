// Manager class extends Employee class inheriting Employee's properties and methods.
const Employee = require('./Employee');
// Manager class has an additional property and method
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
    }
}
// officeNumber
// getRole() overriden to return 'Manager'
// getOffice()
