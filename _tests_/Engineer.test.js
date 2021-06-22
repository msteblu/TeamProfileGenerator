const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  // Testing Engineer Class
  describe("Initialization", () => {
    it("Engineer object was created correctly", () => {
      // Arange
      let id = "2";
      let name = "Name";
      let email = "name@email.com";
      let github = "github";
      const obj = new Engineer(id, name, email, github);
      // Assert
      expect(obj.id).toEqual("2");
      expect(obj.name).toEqual("Name");
      expect(obj.email).toEqual("name@email.com");
      expect(obj.github).toEqual("github");
    });
    // Exception test of id
    it("Should throw an error if not provided text for id", () => {
      // Arrange
      const err = new Error("Expected parameter 'id' to be a non-empty string");
      const cb = () => new Engineer("", "Name", "name@email.com", "github");
      // Assert
      expect(cb).toThrowError(err);
    });
    // Exception test of name
    it("Should throw an error if not provided text for name", () => {
      // Arrange
      const err = new Error("Expected parameter 'name' to be a non-empty string");
      const cb = () => new Engineer("2", "", "name@email.com", "github");
      // Assert
      expect(cb).toThrowError(err);
    });
    // Exception tests of email
    it("Should throw an error if not provided text for email", () => {
      // Arrange
      const err = new Error("Expected parameter 'email' to be a non-empty string");
      const cb = () => new Engineer("2", "Name", "", "github");
      // Assert
      expect(cb).toThrowError(err);
    });    
    it("Should throw an error if email address is not formatted correctly", () => {
      // Arrange
      const err = new Error("Expected parameter 'email' to be in standard email address format");
      const cb = () => new Engineer("2", "Name", "email", "github");
      // Assert
      expect(cb).toThrowError(err);
    });  
    // Exception tests of github
    it("Should throw an error if not provided text for github", () => {
      // Arrange
      const err = new Error("Expected parameter 'github' to be a non-empty string");
      const cb = () => new Engineer("2", "Name", "name@email.com", "");
      // Assert
      expect(cb).toThrowError(err);
    });       
  });
  
  // Testing getID method for Engineer class
  describe("Get ID", () => {
    it("getID method should return correct id", () => {
    // Arrange
    const obj = new Engineer("2", "Name", "name@email.com", "github");
    // Act
    const id = obj.getId();
    // Assert
    expect(id).toEqual(obj.id);
    });

  });

  // Testing getName method for Engineer class
  describe("Get Name", () => {
    it("getName method should return correct name", () => {
      // Arrange
      const obj = new Engineer("2", "Name", "name@email.com", "github");
      // Act
      const name = obj.getName();
      // Assert
      expect(name).toEqual(obj.name);
      });
  
  });

  // Testing getEmail method for Engineer class
  describe("Get Email", () => {
    it("getEmail method should return correct email", () => {
      // Arrange
      const obj = new Engineer("2", "Name", "name@email.com", "github");
      // Act
      const email = obj.getEmail();
      // Assert
      expect(email).toEqual(obj.email);
      });
  });

  // Testing getRole method for Engineer class
  describe("Get Role", () => {
    it("getRole method should return correct role", () => {
      // Arrange
      const obj = new Engineer("2", "Name", "name@email.com", "github");
      // Act
      const role = obj.getRole();
      // Assert
      expect(role).toEqual("Engineer");
      });
  });

  // Testing getGithub method
  describe("Get GitHub", () => {
    it("getGithub method should return correct GitHub profile", () => {
      // Arrange
      const obj = new Engineer("2", "Name", "name@email.com", "github");
      // Act
      const objGitHub = obj.getGithub();
      // Assert
      expect(objGitHub).toEqual(obj.github);
      });
  });
});