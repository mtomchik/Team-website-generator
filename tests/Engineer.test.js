const Engineer = require("../lib/engineer");


test("should be able to set emplyee gitHub from constructor", () => {
    const gitHub = 'samiscool';
    const result = new Engineer('samiscool');
    expect(result.gitHub).toEqual(gitHub);
})