// Object constructor function
class Employee {
    constructor(name, id, email) {
        // Properties of the `Employee` parent class
        this.name = name;
        this.id = id;
        this.email = email;
    };
    // Methods of the `Employee` parent class
    getName() {
        return this.name
    };
    getId() {
        return this.id
    };
    getEmail() {
        return this.email
    };
    getRole() {
        return "Employee"
    };
};

// Ensures other files will have access to this file
module.exports = Employee