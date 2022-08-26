// Properties of the `Employee` parent class
// name
// id
// email

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }
    getId () {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole(){
        return "Employee"
    }
}

// Methods of the `Employee` parent class
// getName() {}
// getId()
// getEmail()
// getRole() returns 'Employee"

module.exports = Employee