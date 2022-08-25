// Displays and handles the lines
function LineToTool() {
  // Set an icon and a name for the object
  this.icon = "assets/diagonal-line.png";
  this.name = "Line_Tool";

  // To smoothly draw a line we will draw the line from the assigned
  // value of startMouseX to current mouse location. The following values store
  // the values from the last fram. They are -1 to start with because
  // we haven't started drawing yet.
  var startMouseX = -1;
  var startMouseY = -1;
  var drawing = false;

  this.draw = function () {
    // if the mouse is pressed
    if (mouseIsPressed) {
      //check if they startX and Y are -1. set them to the current
      //mouse X and Y if they are, also set drawing to true to control
      // the drawing or not of the line, finially request the information
      // of the line drawn with loadPixels().
      if (startMouseX == -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        loadPixels();
      }
      //if we already have values for startMouseX and Y we can draw a line from
      //there to the current mouse location
      else {
        updatePixels();
        line(startMouseX, startMouseY, mouseX, mouseY);
      }
    }
    //if the user has released the mouse we want to set the previousMouse values
    //back to -1 and set drawing to false. If this doesnt happen when the user tries
    // to draw another line it will start from the end of the previous one drawn.
    else if (drawing) {
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}
