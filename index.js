// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");

let manager = {};
let engineer = {};
let intern = {};

let engineers = [];
let interns = [];


// Prompts for users to collect their input: 
const menu = () => {
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'choices',
            message: `Add another team member?`,
            choices: [
                'Engineer',
                'Intern',
                'Quit'
            ]
        }
    ])
};

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerID',
            message: `What is the team manager's employee ID?`,
        },
        {
            type: 'input',
            name: 'managerName',
            message: `What is the team manager's name?`,
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: `What is the team manager's email?`,
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is the team manager's office number?`,
        },
    ])
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerID',
            message: `What is the engineer's employee ID?`,
        },
        {
            type: 'input',
            name: 'engineerName',
            message: `What is the engineer's name?`,
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: `What is the engineer's email?`,
        },
        {
            type: 'input',
            name: 'github',
            message: `What is the engineer's GitHub username?`,
        },
    ])
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internID',
            message: `What is the intern's employee ID?`,
        },
        {
            type: 'input',
            name: 'internName',
            message: `What is the intern's name?`,
        },
        {
            type: 'input',
            name: 'internEmail',
            message: `What is the intern's email?`,
        },
        {
            type: 'input',
            name: 'school',
            message: `What is the intern's school?`,
        },
    ])
};


const inquireManager = () => {
    promptManager()
        .then((data) => {
            manager = new Manager(
                data.managerID,
                data.managerName,
                data.managerEmail,
                data.officeNumber
            );

            console.log(manager.getName());
            inquireChoice();
        });
};

const inquireEngineer = () => {
    promptEngineer()
        .then((data) => {
            engineer = new Engineer(
                data.engineerID,
                data.engineerName,
                data.engineerEmail,
                data.github
            );
            engineers.push(engineer);
            console.log(engineer.getName());
            inquireChoice();
        });
};

const inquireIntern = () => {
    promptIntern()
        .then((data) => {
            intern = new Intern( 
                data.internID,
                data.internName,
                data.internEmail,
                data.school
            );
            interns.push(intern); 
            console.log(intern.getName());
            inquireChoice();
        });
};

const inquireChoice = () => {
    menu()
        .then((data) => {
            switch (data.choices[0]) {
                case "Engineer":
                    inquireEngineer();
                    break;
                case "Intern":
                    inquireIntern();
                    break;
                case "Quit":
                default:
                    console.log(manager, engineers, interns);
                    template.createFile(manager, engineers, interns);
                    break;
            }
        });
};

inquireManager();