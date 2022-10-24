const Employee = require("../lib/employee");


test("should be able to set emplyee gitHub from constructor", () => {
    const gitHub = 'samiscool';
    const result = new Employee('samiscool');
    expect(result.gitHub).toEqual(gitHub);
})