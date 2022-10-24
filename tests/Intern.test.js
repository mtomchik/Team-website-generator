const Employee = require("../lib/employee");


test("should be able to set emplyee school from constructor", () => {
    const school = 'bootcamp';
    const result = new Employee('bootcamp');
    expect(result.school).toEqual(school);
})