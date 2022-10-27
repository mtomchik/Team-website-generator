const Manager = require("../lib/manager");


test("should be able to set emplyee officeNumber from constructor", () => {
    const officeNumber = '303-555-5555';
    const result = new Manager('303-555-5555');
    expect(result.officeNumber).toEqual(officeNumber);
})