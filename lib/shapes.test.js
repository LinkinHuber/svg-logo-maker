const {Square, Circle, Triangle} = require('./shapes.js');


describe('Shape', () => {


//Tests to see if shape color works for each shape in the shapes.js file
describe('Square', () => {
  it('See if shape color works for square', () => {
    const data = new Square('')
    expect (data.shapeColor).toEqual('')
  });
});


describe('Circle', () => {
  it('See if shape color works for circle', () => {
    const data = new Circle('')
    expect (data.shapeColor).toEqual('')
  });
});


describe('Triangle', () => {
  it('See if shape color works for triangle', () => {
    const data = new Triangle('')
    expect (data.shapeColor).toEqual('')
  });
});
});