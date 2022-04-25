// require manager and employee form lib
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const { describe } = require("yargs");
const { expect } = require("@jest/globals");
// call set office number
describe("Set office number via constructor argument", () => {
    const office = 100;
    const e = new Manager("Rick", 1, "ricky@doge.com", office);
    expect(e.officeNumber).toBe(testVal);
})
// can get office number
// role returns manager