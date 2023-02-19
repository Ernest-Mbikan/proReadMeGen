
/* function to render license badge*/
function renderLicenseBadge(license) {
const badge = {
  MIT:  `![license: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)`,
  Apache: `![license](https://img.shields.io/badge/license-Apache_2.0-blue.svg)`,
  GPL:  `![license: GPL v2](https://img.shields.io/badge/license-GPL_v2-blue.svg)`,
  IBM:  `![license: IPL 1.0](https://img.shields.io/badge/license-IPL_1.0-blue.svg)` 
}
return badge[license]
}

/* function to render license link */
function renderLicenseLink(license) {
  const licenselink = {
    MIT:   'https://choosealicense.com/licenses/mit/',
    Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
    GPL:    'https://www.gnu.org/licenses/gpl-3.0.en.html',
    IBM:    'https://www.ibm.com/support/pages/ibm-license-agreement-machine-code'
  }
  
  return renderLicenseLink[license]
}

/* function to render license link section */
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed under the ${license} license.`
    )
  }
  return ''
}

/* function to generate markdown for README */
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
    
  ## Table of Contents 
  * [Project Description](#Description)
  * [Usage](#Usage)
  * [Contributiing](#Contributing)
  * [Installation](#Installation)
  * [Questions](#Questions)
  * [License](#License)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

  `;
}

module.exports = generateMarkdown;
