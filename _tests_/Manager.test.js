const Manager = require("../lib/Manager");

describe("Manager class", () => {
  // Testing Manager Class
  describe("Initialization", () => {
    it("Manager object was created correctly", () => {
      // Arange
      let id = "1";
      let name = "Name";
      let email = "name@email.com";
      let officeNumber = "officeNumber";
      const obj = new Manager(id, name, email, officeNumber);
      // Assert
      expect(obj.id).toEqual("1");
      expect(obj.name).toEqual("Name");
      expect(obj.email).toEqual("name@email.com");
      expect(obj.officeNumber).toEqual("officeNumber");
    });
    // Exception test of id
    it("Should throw an error if not provided text for id", () => {
      // Arrange
      const err = new Error("Expected parameter 'id' to be a non-empty string");
      const cb = () => new Manager("", "Name", "name@email.com", "officeNumber");
      // Assert
      expect(cb).toThrowError(err);
    });
    // Exception test of name
    it("Should throw an error if not provided text for name", () => {
      // Arrange
      const err = new Error("Expected parameter 'name' to be a non-empty string");
      const cb = () => new Manager("1", "", "name@email.com", "officeNumber");
      // Assert
      expect(cb).toThrowError(err);
    });
    // Exception tests of email
    it("Should throw an error if not provided text for email", () => {
      // Arrange
      const err = new Error("Expected parameter 'email' to be a non-empty string");
      const cb = () => new Manager("1", "Name", "", "officeNumber");
      // Assert
      expect(cb).toThrowError(err);
    });    
    it("Should throw an error if email address is not formatted correctly", () => {
      // Arrange
      const err = new Error("Expected parameter 'email' to be in standard email address format");
      const cb = () => new Manager("1", "Name", "email", "officeNumber");
      // Assert
      expect(cb).toThrowError(err);
    });
    // Exception tests of officeNumber
    it("Should throw an error if not provided text for officeNumber", () => {
      // Arrange
      const err = new Error("Expected parameter 'officeNumber' to be a non-empty string");
      const cb = () => new Manager("1", "Name", "name@email.com", "");
      // Assert
      expect(cb).toThrowError(err);
    });           
  });
  
  // Testing getID method for Manager class
  describe("Get ID", () => {
    it("getID method should return correct id", () => {
    // Arrange
    const obj = new Manager("1", "Name", "name@email.com", "officeNumber");
    // Act
    const id = obj.getId();
    // Assert
    expect(id).toEqual(obj.id);
    });

  });

  // Testing getName method for Manager class
  describe("Get Name", () => {
    it("getName method should return correct name", () => {
      // Arrange
      const obj = new Manager("1", "Name", "name@email.com", "officeNumber");
      // Act
      const name = obj.getName();
      // Assert
      expect(name).toEqual(obj.name);
      });
  
  });

  // Testing getEmail method for Manager class
  describe("Get Email", () => {
    it("getEmail method should return correct email", () => {
      // Arrange
      const obj = new Manager("1", "Name", "name@email.com", "officeNumber");
      // Act
      const email = obj.getEmail();
      // Assert
      expect(email).toEqual(obj.email);
      });
  });

  // Testing getRole method for Manager class
  describe("Get Role", () => {
    it("getRole method should return correct role", () => {
      // Arrange
      const obj = new Manager("1", "Name", "name@email.com", "officeNumber");
      // Act
      const role = obj.getRole();
      // Assert
      expect(role).toEqual("Manager");
      });
  });

  // Testing getOfficeNumber method
  describe("Get Office Number", () => {
    it("getOfficeNumber method should return correct office number", () => {
      // Arrange
      const obj = new Manager("1", "Name", "name@email.com", "officeNumber");
      // Act
      const number = obj.getOfficeNumber();
      // Assert
      expect(number).toEqual(obj.officeNumber);
      });
  });
});