const Intern = require("../lib/intern");


test("should be able to set emplyee school from constructor", () => {
    const school = 'bootcamp';
    const result = new Intern('bootcamp');
    expect(result.school).toEqual(school);
})