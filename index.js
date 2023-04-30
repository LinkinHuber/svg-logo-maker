const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
//const {Square, Circle, Triangle} = require('./lib/shapes')


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
      name: 'textcolor',
      message: 'What color do you want your text to be?',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape',
      choices: ['Square', 'Circle', 'Triangle']
    },
    {
      type: 'input',
      name: 'shapecolor',
      message: 'What color do you want your shape to be?',
    },
  ]);
};


const generateSVG = ({text, textcolor, shape, shapecolor}) =>
`<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">



 shape.setColor('${shapecolor}');

 <text x='150' y='125' font-size='60' text-anchor='middle' fill='${textcolor}'>${text}</text>

 </svg>`


const init = () => {
  gatherInfo()
  .then((data) => writeFile('logo.svg', generateSVG(data)))
  .then(() => console.log('Successfully generated logo.svg'))
  .catch((err) => console.error(err));
};

init();
