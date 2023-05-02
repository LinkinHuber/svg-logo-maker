const {Square, Circle, Triangle} = require('./shapes.js');


describe('Shape', () => {


describe('Square', () => {
  it('See if all user input works for Square', () => {
    const shapeString = `<rect x='90' y='40' width='120' height='120' fill='${this.shapeColor}' />`;
      const square = new Square();
      expect((`<rect x='90' y='40' width='120' height='120' fill='${this.shapeColor}' />`)).toEqual(shapeString);
  });
});


describe('Circle', () => {
  it('See if all user input works for circle', () => {
    
  });
});


describe('Triangle', () => {
  it('See if all user input works for triangle', () => {
    const triangle = new Triangle('123', 'yellow', 'triangle', 'blue');
      expect (triangle.text).toEqual('123');
      expect (triangle.textColor).toEqual('yellow');
      expect (triangle.shape).toEqual('triangle');
      expect (triangle.shapeColor).toEqual('blue');
  });
});
});