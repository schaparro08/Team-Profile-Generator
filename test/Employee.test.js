// Require the employee from the lib folder
const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");

//test can begin employee instance 
describe("Employee", ()=> {
    it("Begin the instance of employee", () => {
        const e = new Employee();
        expect(new Employee(e)).toBe("object")
    });
// test can set name via constructor args
    it("Can set a name with the constructor arguments", () => {
        const name = "Stephanie";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    })
})