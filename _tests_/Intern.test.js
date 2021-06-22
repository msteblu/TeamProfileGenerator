const Intern = require("../lib/Intern");

describe("Intern class", () => {
  describe("Initialization", () => {
    it("Intern object was created correctly", () => {
      // Arange
      let id = "3";
      let name = "Name"
      let email = "name@email.com"
      const obj = new Intern(id, name, email);
      // Assert
      expect(obj.id).toEqual("3");
      expect(obj.name).toEqual("Name");
      expect(obj.email).toEqual("name@email.com");
    });
    // Exception test of id
    it("Should throw an error if not provided text for id", () => {
      // Arrange
      const err = new Error("Expected parameter 'id' to be a non-empty string");
      const cb = () => new Intern("", "Name", "name@email.com");
      // Assert
      expect(cb).toThrowError(err);
    });
    // Exception test of name
    it("Should throw an error if not provided text for name", () => {
      // Arrange
      const err = new Error("Expected parameter 'name' to be a non-empty string");
      const cb = () => new Intern("3", "", "name@email.com");
      // Assert
      expect(cb).toThrowError(err);
    });
    // Exception test of email
    it("Should throw an error if not provided text for email", () => {
      // Arrange
      const err = new Error("Expected parameter 'email' to be a non-empty string");
      const cb = () => new Intern("3", "Name", "");
      // Assert
      expect(cb).toThrowError(err);
    });    
    it("Should throw an error if email address is not formatted correctly", () => {
      // Arrange
      const err = new Error("Expected parameter 'email' to be in standard email address format");
      const cb = () => new Intern("3", "Name", "email");
      // Assert
      expect(cb).toThrowError(err);
    });        
  });
  
  describe("Get ID", () => {
    it("getID method should return correct id", () => {
    // Arrange
    const obj = new Intern("3", "Name", "name@email.com");
    // Act
    const id = obj.getId();
    // Assert
    expect(id).toEqual(obj.id);
    });

  });

  describe("Get Name", () => {
    it("getName method should return correct name", () => {
      // Arrange
      const obj = new Intern("3", "Name", "name@email.com");
      // Act
      const name = obj.getName();
      // Assert
      expect(name).toEqual(obj.name);
      });
  
  });

  describe("Get Email", () => {
    it("getEmail method should return correct email", () => {
      // Arrange
      const obj = new Intern("3", "Name", "name@email.com");
      // Act
      const email = obj.getEmail();
      // Assert
      expect(email).toEqual(obj.email);
      });
  });

  describe("Get Role", () => {
    it("getRole method should return correct role", () => {
      // Arrange
      const obj = new Intern("3", "Name", "name@email.com");
      // Act
      const role = obj.getRole();
      // Assert
      expect(role).toEqual("Intern");
      });
  });

  describe("Get School", () => {
    it("getSchool method should return correct school", () => {
      // Arrange
      const obj = new Intern("3", "Name", "name@email.com");
      // Act
      const objSchool = obj.getSchool();
      // Assert
      expect(objSchool).toEqual(obj.school);
      });
  });
});