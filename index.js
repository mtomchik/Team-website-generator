const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const render = require("./src/template.js")
const generatePage = require("./src/template.js");

const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Directory = path.resolve(__dirname, "dist");
const Path = path.join(Directory, "index.html");

const staff = [];

const questions = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is the employee name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the employee id?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the employee email?",
      name: "email",
    },
    {
      type: "list",
      message: "What role does the employee fill?",
      name: "role",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]);

  if (answers.role === "Manager") {
    const managerAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is your office phone number?",
        name: "officeNumber",
      },
    ]);
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerAns.officeNumber
    );
    staff.push(newManager);
  } else if (answers.role === "Engineer") {
    const githubAns = await inquirer.prompt([
      {
        type: "input",
        message: "What is your GitHub user name?",
        name: "github",
      },
    ]);
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      githubAns.github
    );
    staff.push(newEngineer);
  } else if (answers.role === "Intern") {
    const internAns = await inquirer.prompt([
      {
        type: "input",
        message: "What school are you going too?",
        name: "school",
      },
    ]);

    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internAns.school
    );
    staff.push(newIntern);
  }
};

async function promptQuestions() {
  await questions();

  const addMemberAns = await inquirer.prompt([
    {
      name: "addMember",
      type: "list",
      choices: ["Add a new member", "Create team"],
      message: "What would you like to do next?",
    },
  ]);

  if (addMemberAns.addMember === "Add a new member") {
    return promptQuestions();
  } else {
    return generateTeam();
  }
}

// promptQuestions();

function generateTeam() {
  if (!fs.existsSync(Directory)) {
    fs.mkdirSync(Directory);
  }
  fs.writeFileSync(Path, render(staff), 'utf-8');
}
promptQuestions();
