// Engineer class extends Employee class inheriting Employee's properties and methods.
const Employee = require('./Employee');
// Engineer class has an additional property
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, github);
        this.github = github;
    };
    // Engineer class has additional methods
    getGithub() {
        return this.github
    };
    getRole() {
        return "Engineer"
    };
};

// Ensures other files will have access to this file
module.exports = Engineer