const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


const gatherInfo = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter 3 characters for SVG logo',
      validate: your_title => {
        if (your_title.length === 3) {
          return true;
        } else {
          console.log("Text must be exactly 3 characters long")
          return false;
        }
       }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What color do you want the text to be?',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape',
      choices: ['Square', 'Circle', 'Triangle']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color do you want the shape to be?',
    },
  ]);
};


const generateSVG = ({text, textColor, shape}) =>
`<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">

 ${shape.render()}

 <text x='150' y='125' font-size='60' text-anchor='middle' fill='${textColor}'>${text}</text>

 </svg>`


const init = () => {
  gatherInfo()
  .then((data) => writeFile('logo.svg', generateSVG(data)))
  .then(() => console.log('Successfully generated logo.svg'))
  .catch((err) => console.error(err));
};

init();