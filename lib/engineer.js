// Engineer class extends Employee class inheriting Employee's properties and methods.
const Employee = require('./Employee');
// Manager class has an additional property and method
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email, github);
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getRole(){
        return "Engineer"
    }
}
// Engineer class has additional properties and methods

// github = GitHub username  From test: GitHubUser
// getGithub()
// getRole() overriden to return 'Engineer'

module.exports = Engineer