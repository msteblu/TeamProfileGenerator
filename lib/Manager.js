const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        if (typeof officeNumber !== "string" || !officeNumber.trim().length) {
            throw new Error("Expected parameter 'officeNumber' to be a non-empty string");
        }
        super(id, name, email);
        this.officeNumber = officeNumber;

    };

    getOfficeNumber() {
        return this.officeNumber;
    };
    getRole() {
        return "Manager";
    };
};

module.exports = Manager