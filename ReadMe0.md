# Professional Readme Generator

This project is a command-line application that dynamically generates a readme.me file.

## Description

The app uses the inquirer pacckage to take user input at the command-line. The information collected is sectioned using a function (generateMarkdown). The functions to write the data and to generate the Readme.md are initiated to generate the file.

The app includes subfuctions that render license/license link and the corresponding license badge (please see comments).

## Functionality

When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:* The title of my project

* Sections entitled:
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
* When a user enters the project title then it is displayed as the title of the README
* When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
* When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
* When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
* When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
* When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README.

## Demo

A sample readme.md file generated using the app is included in the PROREADME (main) folder. Follow the link for a video walk-through video.



![https://1drv.ms/v/s!AlFDfpmVPBAnvFXzK2ID1-aQnZWz?e=59sh0J]('https://1drv.ms/v/s!AlFDfpmVPBAnvFXzK2ID1-aQnZWz?e=59sh0J')
