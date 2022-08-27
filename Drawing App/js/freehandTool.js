function FreehandTool() {
  //set an icon and a name for the object
  this.icon = "assets/pencil.png";
  this.name = "Freehand_Tool";

  //to smoothly draw we'll draw a line from the previous mouse location
  //to the current mouse location. The following values store
  //the locations from the last frame. They are -1 to start with because
  //we haven't started drawing yet.
  var previousMouseX = -1;
  var previousMouseY = -1;
  var self = this;

  this.draw = function () {
    // Adjust the stroke of the pencil depending on the value selected on the drop-down
    strokeWeight(this.fhSlider.value());

    //if the mouse is pressed
    if (mouseIsPressed && mouseClickedOnCanvas()) {
      //check if they previousX and Y are -1. set them to the current
      //mouse X and Y if they are.
      if (previousMouseX == -1) {
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      }
      //if we already have values for previousX and Y we can draw a line from
      //there to the current mouse location
      else {
        line(previousMouseX, previousMouseY, mouseX, mouseY);
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      }
    }
    //if the user has released the mouse we want to set the previousMouse values
    //back to -1.
    //try and comment out these lines and see what happens!
    else {
      previousMouseX = -1;
      previousMouseY = -1;
    }
  };

  this.populateOptions = function () {
    // Create Slider Label
    this.fhLabel = createElement("label", "Size: ");
    this.fhLabel.parent("#options");
    this.fhLabel.class("label");

    // Create Slider
    this.fhSlider = createSlider(1, 100, 1);
    this.fhSlider.parent("#options");
    this.fhSlider.class("slider");

    // Create Text input field
    this.fhInput = createInput("");
    this.fhInput.parent("#options");
    this.fhInput.class("textBox");

    // Create DIV that prevents bugs at the moment of changing between tools
    this.fhDiv = createDiv();
    this.fhDiv.parent("#options");

    // Assign and update the text box value with the value of the slider and viseversa
    this.fhInput.value(this.fhSlider.value());

    this.fhSlider.mouseMoved(function () {
      self.fhInput.value(self.fhSlider.value());
    });

    this.fhInput.input(function () {
      self.fhSlider.value(self.fhInput.value());
    });
  };

  this.unselectTool = function () {
    select("#options").html("");
  };
}
