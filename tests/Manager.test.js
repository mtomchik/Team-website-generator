const Employee = require("../lib/employee");


test("should be able to set emplyee officeNumber from constructor", () => {
    const officeNumber = '303-555-5555';
    const result = new Employee('303-555-5555');
    expect(result.officeNumber).toEqual(officeNumber);
})