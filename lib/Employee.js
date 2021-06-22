const validateEmail = require("../utils/validateEmail");

class Employee {
    // Constructor
    constructor(id, name, email) {
        if (typeof id !== "string" || !id.trim().length) {
            throw new Error("Expected parameter 'id' to be a non-empty string");
          }
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }        
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
          }
        if (!validateEmail(email)) {
            throw new Error("Expected parameter 'email' to be in standard email address format");
        }
        this.id = id;
        this.name = name;
        this.email = email;
    };

    // Getters
    getId() {
        return this.id;
    };
    getName() {
        return this.name;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return "Employee";
    }

}

module.exports = Employee;