const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");

const generateHTML = ({
  title,
  titledesc,
  pre,
  install,
  use,
  license,
  github,
  email,
  test
}) =>
  `
# <u>${title}</u>

## Description 
-${titledesc}

## License
[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents 
- [Questions](#questions) 
- [Dependencies](#dependencies) 
- [Installing](#installing) 
- [Usage](#usage) 

## Questions 

What is my github username? 
- Github : ${github}
https://github.com/${github}


Best email to contact me?
- Email : ${email}


### Dependencies/Usage 
<p>-${pre}</p>



### Installing  
<p>-${install}</p>  


### Test 
<p>-${test}</p>


### Contributing 
<p>Please refer to each project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.</p>


1. Fork the repo on GitHub

2. Clone the project to your own machine

3. Commit changes to your own branch

4. Push your work back up to your fork

5. Submit a Pull request so that we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!



    `;

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "titledesc",
      message: "Give us a small description of what your project does: ",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license: ",
      choices: [
        "MIT",
        "IBM",
        "MPL2.0",
        "EPL1.0",
        "Apache2.0",
        "Boost1.0",
        "Perl",
      ],
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "pre",
      message:
        "Name any prerequisites,libraries, OS version etc., needed before installing program:",
    },
    {
      type: "input",
      name: "install",
      message: "How/Where can someone download your program?",
    },
    {
      type: "input",
      name: "test",
      message:
        "How do you install and run the program once downloaded? Step-by-step (Seperate with commas):",
    },
  ])
  .then((data) => {
    const htmlPageContent = generateHTML(data);

    fs.writeFile("README.md", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
