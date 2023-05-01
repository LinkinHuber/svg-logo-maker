const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Circle, Triangle } = require('./lib/shapes.js');


//Goes through a series of prompts and asks for the users input on text, text color, shape, and shape color. Also have an if else statement that validates whether or not your text is 3 characters long.
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
          console.log('Text must be exactly 3 characters long')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color or hexidecimal number for the text',
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
      message: 'Enter a color or hexidecimal number for the shape',
    },
  ]);
};


//This function takes the user data and then sees what shape is selected from the list of choices matches it up with the proper shape class it creates that new shape which is pulled from the shapes.js file plugs it into the svg code along with all of the other user inputed data like shape color, text, and text color. After thats all said and done a new svg file is created using the user input. 
function createShapeSVG() {
  gatherInfo()
    .then(data => {
      let shape = ''
      if (data.shape === 'Square') {
        shape = new Square()
      }
      if (data.shape === 'Circle') {
        shape = new Circle()
      }
      if (data.shape === 'Triangle') {
        shape = new Triangle()
      }
      shape.setColor(data.shapeColor)

      return `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'> 

		  ${shape.render()}

		  <text x='150' y='125' font-size='60' text-anchor='middle' fill='${data.textColor}'>${data.text}</text>

	    </svg>`

    })
    .then(svg => {
      fs.writeFileSync('./examples/logo.svg', svg);
      console.log('Generated logo.svg');
    });
};
//Calling the above function 
createShapeSVG();