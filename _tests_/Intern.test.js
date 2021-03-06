const Intern = require("../lib/Intern");

describe("Intern class", () => {
  // Testing Intern Class
  describe("Initialization", () => {
    it("Intern object was created correctly", () => {
      // Arange
      let id = "3";
      let name = "Name";
      let email = "name@email.com";
      let school = "school";
      const obj = new Intern(id, name, email, school);
      // Assert
      expect(obj.id).toEqual("3");
      expect(obj.name).toEqual("Name");
      expect(obj.email).toEqual("name@email.com");
      expect(obj.school).toEqual("school");
    });
    // Exception test of id
    it("Should throw an error if not provided text for id", () => {
      // Arrange
      const err = new Error("Expected parameter 'id' to be a non-empty string");
      const cb = () => new Intern("", "Name", "name@email.com", "school");
      // Assert
      expect(cb).toThrowError(err);
    });
    // Exception test of name
    it("Should throw an error if not provided text for name", () => {
      // Arrange
      const err = new Error("Expected parameter 'name' to be a non-empty string");
      const cb = () => new Intern("3", "", "name@email.com", "school");
      // Assert
      expect(cb).toThrowError(err);
    });
    // Exception tests of email
    it("Should throw an error if not provided text for email", () => {
      // Arrange
      const err = new Error("Expected parameter 'email' to be a non-empty string");
      const cb = () => new Intern("3", "Name", "", "school");
      // Assert
      expect(cb).toThrowError(err);
    });    
    it("Should throw an error if email address is not formatted correctly", () => {
      // Arrange
      const err = new Error("Expected parameter 'email' to be in standard email address format");
      const cb = () => new Intern("3", "Name", "email", "school");
      // Assert
      expect(cb).toThrowError(err);
    });       
    // Exception tests of school
    it("Should throw an error if not provided text for school", () => {
      // Arrange
      const err = new Error("Expected parameter 'school' to be a non-empty string");
      const cb = () => new Intern("3", "Name", "name@email.com", "");
      // Assert
      expect(cb).toThrowError(err);
    });     
  });
  
  // Testing getID method for Intern class
  describe("Get ID", () => {
    it("getID method should return correct id", () => {
    // Arrange
    const obj = new Intern("3", "Name", "name@email.com", "school");
    // Act
    const id = obj.getId();
    // Assert
    expect(id).toEqual(obj.id);
    });

  });

  // Testing getName method for Intern class
  describe("Get Name", () => {
    it("getName method should return correct name", () => {
      // Arrange
      const obj = new Intern("3", "Name", "name@email.com", "school");
      // Act
      const name = obj.getName();
      // Assert
      expect(name).toEqual(obj.name);
      });
  
  });

  // Testing getEmail method for Intern class
  describe("Get Email", () => {
    it("getEmail method should return correct email", () => {
      // Arrange
      const obj = new Intern("3", "Name", "name@email.com", "school");
      // Act
      const email = obj.getEmail();
      // Assert
      expect(email).toEqual(obj.email);
      });
  });

  // Testing getRole method for Intern class
  describe("Get Role", () => {
    it("getRole method should return correct role", () => {
      // Arrange
      const obj = new Intern("3", "Name", "name@email.com", "school");
      // Act
      const role = obj.getRole();
      // Assert
      expect(role).toEqual("Intern");
      });
  });

  // Testing getSchool method
  describe("Get School", () => {
    it("getSchool method should return correct school", () => {
      // Arrange
      const obj = new Intern("3", "Name", "name@email.com", "school");
      // Act
      const objSchool = obj.getSchool();
      // Assert
      expect(objSchool).toEqual(obj.school);
      });
  });
});