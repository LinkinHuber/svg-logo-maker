//Sets the inputed shape color and then plugs it into the svg code below to change the color of the shape.
class Shape{
	constructor(){
		this.shapeColor = ""

	}
	setColor(shapeColor){
		this.shapeColor = shapeColor
	}
}

//Individual shape classes that extend off of the main shape class... when a new shape is created on the index.js file, using module exports it then plugs in the info from one of these shape classes including the shape color aswell. 
class Square extends Shape {
  render(){
    return `<rect x='90' y='40' width='120' height='120' fill='${this.shapeColor}' />`
  }
}

class Circle extends Shape {
  render(){
    return `<circle cx='150' cy='100' r='80' fill='${this.shapeColor}' />`
  }
}

class Triangle extends Shape {
  render(){
    return `<polygon points='150, 18 244, 182 56, 182' fill='${this.shapeColor}' />`
  }
}

module.exports = {Square, Circle, Triangle};