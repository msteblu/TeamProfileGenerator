const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }
        super(id, name, email);
        this.school = school;

    };

    getSchool() {
        return this.school;
    };
    getRole() {
        return "Intern";
    };
};

module.exports = Intern