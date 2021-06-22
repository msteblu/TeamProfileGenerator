const fs = require('fs');

let fileContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>

<body>
    <div class="jumbotron jumbotron-fluid bg-success text-light py-3 mb-4">
        <div class="container text-center">
            <h1 class="display-4">My Team</h1>
        </div>
    </div>
    <main>

        <div class="card-columns">
            <div class="row justify-content-center">
    `; 

let fileEnding = `          </div>
        </div>

    </main>
</body>

</html>`;

const createManagerCard = (manager) => {
  return `              <div class="card border-dark m-3 bg-warning" style="max-width: 18rem;">
                    <div class="text-center">
                        <div class="card-header h1"><strong>${manager.name}</strong></div>
                        <div class="card-header h2"><em>${manager.getRole()}</em></div>
                    </div>
                    <div class="card-body text-left text-dark m-2 bg-light" style="border: 2px dotted gray">
                        <p class="card-text"><strong>ID:</strong> ${manager.id}</p>
                        <p class="card-text"><strong>Email: </strong><a href = "mailto: ${manager.email}" class="link-success">${manager.email}</a></p>
                        <p class="card-text"><strong>Office Number: </strong>${manager.officeNumber}</p>
                    </div>
                </div>
    `;
};

const createEngineerCard = (engineer) => {
  return `              <div class="card border-dark m-3 bg-warning" style="max-width: 18rem;">
                    <div class="text-center">
                        <div class="card-header h1"><strong>${engineer.name}</strong></div>
                        <div class="card-header h2"><em>${engineer.getRole()}</em></div>
                    </div>
                    <div class="card-body text-left text-dark m-2 bg-light" style="border: 2px dotted gray">
                        <p class="card-text"><strong>ID: </strong>${engineer.id}</p>
                        <p class="card-text"><strong>Email: </strong><a href = "mailto: ${engineer.email}" class="link-success">${engineer.email}</a></p>
                        <p class="card-text"><strong>GitHub Profile: </strong><a href="https://www.github.com/${engineer.github}" target="_blank" rel="noopener noreferrer" class="link-success">${engineer.github}</a></p>
                    </div>
                </div>
    `;
};

const createInternCard = (intern) => {
  return `                 <div class="card border-dark m-3 bg-warning" style="max-width: 18rem;">
                    <div class="text-center">
                        <div class="card-header h1"><strong>${intern.name}</strong></div>
                        <div class="card-header h2"><em>${intern.getRole()}</em></div>
                    </div>
                    <div class="card-body text-left text-dark m-2 bg-light" style="border: 2px dotted gray">
                        <p class="card-text"><strong>ID: </strong>${intern.id}</p>
                        <p class="card-text"><strong>Email: </strong><a href = "mailto: ${intern.email}" class="link-success">${intern.email}</a></p>
                        <p class="card-text"><strong>School: </strong>${intern.school}</p>
                    </div>
                </div>
    `;
};

const createFile = (manager, engineers, interns) => {
  fileContent = fileContent + createManagerCard(manager);
  engineers.forEach(iterateEngineers);
  interns.forEach(iterateInterns);
  createFullFile();
};

const createFullFile = () => {
    fileContent = fileContent +fileEnding;
    writeHTML();
};

const iterateEngineers = (value) => {
  fileContent = fileContent + createEngineerCard(value);
};

const iterateInterns = (value) => {
  fileContent = fileContent + createInternCard(value);
};

const writeHTML = function () {
  fs.writeFile(`dist/team.html`, fileContent, (err) =>
                err ? console.log(err) : console.log('Successfully wrote to team.html')
            );
}

module.exports = {
    createManagerCard,
    createEngineerCard,
    createInternCard,
    createFile,
    iterateEngineers,
    iterateInterns,
    writeHTML,
}