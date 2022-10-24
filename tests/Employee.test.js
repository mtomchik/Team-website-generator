const Employee = require("../lib/employee");

test("should be able to set emplyee name from constructor", () => {
    const name = 'Sam';
    const result = new Employee('Sam');
    expect(result.name).toEqual(name);
})

test("should be able to set emplyee id from constructor", () => {
    const id = '1234';
    const result = new Employee('1234');
    expect(result.id).toEqual(id);
})

test("should be able to set emplyee email from constructor", () => {
    const email = 'sam@cool.com';
    const result = new Employee('sam@cool.com');
    expect(result.email).toEqual(email);
})