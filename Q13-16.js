// IMPORTANT: Make sure you test every answer in the console to make sure it
// prints what you want it to.

// Question 13
// Write a class named Point2D which stores x and y coordinates.

class Point2D{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    
}









// Question 14
// Write a class named Rectangle which stores three variables: a Point2D to
// represent the top left of the Rectangle, a width and a height.
// Use ES6 class syntax.

class Rectangle {
    constructor(Point2D, height, width) {
      this.height = height;
      this.width = width;
      this.Point2D = Point2D;
    }
  }








// Question 15
// Write an instance method inside the ES6 class named getArea which returns
// the area of the Rectangle.











// Question 16
// Write a function named getTotalCoverage which receives an array of Rectangle
// objects, uses map to create an array with their areas, and then uses reduce
// to return the sum of their areas.

const getTotalCoverage = (rectArr) => {

};
