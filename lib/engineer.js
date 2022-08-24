// Engineer class extends Employee class inheriting Employee's properties and methods.
const Employee = require('./employee');
// Manager class has an additional property and method
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email, github);
        this.github = github;
    }
}
// Engineer class has additional properties and methods

// github = GitHub username
// getGithub()
// getRole() overriden to return 'Engineer'
