const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, github) {
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
        super(id, name, email);
        this.github = github;

    };

    getGithub() {
        return this.github;
    };
    getRole() {
        return "Engineer";
    };
};

module.exports = Engineer