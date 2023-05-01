const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
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
  ])
}


// const fs = require('fs');
// function createLogo() {
// 	inquirer.prompt(questions)
// 		.then(data => {
// 			console.log(data)
// 			let shape = ""
// 			if (data.shape === "Circle") {
// 				shape = new Circle()

// 			}
// 			if (data.shape === "Triangle") {
// 				shape = new Triangle()

// 			}

// 			if (data.shape === "Square") {
// 				shape = new Square()

// 			}
// 			shape.setColor(data.color)
// 			console.log(shape)
// 			return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
// 		${shape.render()
// 				}
	
// 		<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logo}</text>
	
// 	</svg>`

// 		})
// 		.then(svg=>{
// 			console.log(svg)
// 			fs.writeFileSync("logo.svg", svg)
// 		})
// }
// createLogo()


const generateSVG = ({text, textColor}) => 
`<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>

 ${shape.render()}

 <text x='150' y='125' font-size='60' text-anchor='middle' fill='${textColor}'>${text}</text>

 </svg>`


const init = () => {
  gatherInfo()
  .then((data) => writeFile('./examples/logo.svg', generateSVG(data)))
  .then(() => console.log('Successfully generated logo.svg'))
  .catch((err) => console.error(err));
};

init();