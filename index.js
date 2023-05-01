const inquirer = require('inquirer');
const fs = require('fs');
const {Square, Circle, Triangle} = require('./lib/shapes.js');


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
  ])
}


function createSVG() {
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
		.then(svg=>{
			fs.writeFileSync('./examples/logo.svg', svg)
      console.log('Generated logo.svg')
		})
}
createSVG()