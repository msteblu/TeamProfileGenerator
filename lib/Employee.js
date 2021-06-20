class Employee {
    // Constructor
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
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