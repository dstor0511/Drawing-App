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
    var self = this;

    this.draw = function () {
        strokeWeight(this.ltoSlider.value());
        // if the mouse is pressed
        if (mouseIsPressed && mouseClickedOnCanvas()) {
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

    this.populateOptions = function () {
        // Create Slider Label
        this.ltoLabel = createElement("label", "Size: ");
        this.ltoLabel.parent("#options");
        this.ltoLabel.class("label");

        // Create Slider
        this.ltoSlider = createSlider(1, 100, 1);
        this.ltoSlider.parent("#options");
        this.ltoSlider.class("slider");

        // Create Text input field
        this.ltoInput = createInput("");
        this.ltoInput.parent("#options");
        this.ltoInput.class("textBox");

        // Create DIV that prevents bugs at the moment of changing between tools
        this.ltoDiv = createDiv();
        this.ltoDiv.parent("#options");

        // Assign and update the text box value with the slider value
        this.ltoInput.value(this.ltoSlider.value());

        this.ltoSlider.mouseMoved(function () {
            self.ltoInput.value(self.ltoSlider.value());
        });

        this.ltoInput.input(function () {
            self.ltoSlider.value(self.ltoInput.value());
        });
    };

    this.unselectTool = function () {
        // Set the current tool to this tool
        select("#options").html("");
    };
}
