const Employee = require("./lib/Employee");

// Initialize a new Employee object
const employee = new Employee();

// Start playing
// game.play();


// // Include packages needed for this application
// const inquirer = require('inquirer');
// const fs = require('fs');
// // Link to the generateMarkdown file, which provides the badge/link for licenses:
// const generate = require('./utils/generateMarkdown.js');

// // Prompts for users to collect their input: 
// const promptUser = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'title',
//             message: 'What is the title of your project?',
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'Provide a short description explaining the what, why, and how of your project.',
//         },
//         {
//             type: 'input',
//             name: 'installation',
//             message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
//         },
//         {
//             type: 'input',
//             name: 'usage',
//             message: 'Provide instructions and examples for use.',
//         },
//         {
//             type: 'checkbox',
//             name: 'license',
//             message: 'Please choose a license for your project. (Listed from most conditions to none.)',
//             choices: [
//                 'GNU AGPLv3',
//                 'GNU GPLv3',
//                 'GNU LGPLv3',
//                 'Mozilla Public License 2.0',
//                 'Apache License 2.0',
//                 'MIT License',
//                 'Boost Software License 1.0',
//                 'The Unlicense',
//             ],
//         },
//         {
//             type: 'input',
//             name: 'contributing',
//             message: 'Provide guidelines for how other developers can contribute to your project.',
//         },
//         {
//             type: 'input',
//             name: 'tests',
//             message: 'Provide examples on how to run tests for your application.',
//         },
//         {
//             type: 'input',
//             name: 'username',
//             message: 'What is your GitHub username?',
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email address?',
//         },
//     ])
// };


// // Function to write README file
// const writeToFile = (data, badge, link) =>
//     `# ${data.title}

// ${badge}

// ## Description

// ${data.description}
    
// ## Table of Contents
//  - [Installation](#installation)
//  - [Usage](#usage)
//  - [License](#license)
//  - [Contributing](#contributing)
//  - [Tests](#tests)
//  - [Questions](#questions)
    
    
// ## Installation

// ${data.installation}
    
// ## Usage

// ${data.usage}
    
// ## License

// This project is licensed under [${data.license}](${link}).
    
// ## Contributing

// ${data.contributing}
    
// ## Tests

// ${data.tests}
    
// ## Questions

// See more of my work on my [GitHub Profile](https://github.com/${data.username}/).
// For any additional questions, reach me at my email: ${data.email}.`;

// // Function to initialize app
// // Run the prompts, then pass in the collected data and the correct license badges/links
// // Write out a new README file
// const init = () => {
//     promptUser()
//         .then((data) => {
//             let { badge, link } = generate.renderLicense(data.license);
//             const readmePageContent = writeToFile(data, badge, link);

//             fs.writeFile('README.md', readmePageContent, (err) =>
//                 err ? console.log(err) : console.log('Successfully wrote to README.md')
//             );
//         })

// };

// // Function call to initialize app
// init();