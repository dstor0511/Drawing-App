function EraserTool() {
    //set an icon and a name for the object
    this.icon = "assets/eraser.png";
    this.name = "Eraser_Tool";

    //to smoothly draw we'll draw a line from the previous mouse location
    //to the current mouse location. The following values store
    //the locations from the last frame. They are -1 to start with because
    //we haven't started drawing yet.
    var previousMouseX = -1;
    var previousMouseY = -1;
    var self = this;
    // Initialize tool to false as it's not selected still
    this.ErSelected = false;

    this.draw = function () {
        //if the mouse is pressed
        if (mouseIsPressed && mouseClickedOnCanvas()) {
            this.ErSelected = true;

            if (this.ErSelected == true) {
                push();
                strokeWeight(this.ErSlider.value());
                stroke(255);
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
                pop();
            } else {
                this.ErSelected = false;
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
        this.ErLabel = createElement("label", "Size: ");
        this.ErLabel.parent("#options");
        this.ErLabel.class("label");

        // Create Slider
        this.ErSlider = createSlider(1, 100, 20);
        this.ErSlider.parent("#options");
        this.ErSlider.class("slider");

        // Create Text input field
        this.ErInput = createInput("");
        this.ErInput.parent("#options");
        this.ErInput.class("textBox");

        // Create DIV that prevents bugs at the moment of changing between tools
        this.ErDiv = createDiv();
        this.ErDiv.parent("#options");

        // Assign and update the text box value with the value of the slider and viseversa
        this.ErInput.value(this.ErSlider.value());

        this.ErSlider.mouseMoved(function () {
            self.ErInput.value(self.ErSlider.value());
        });

        this.ErInput.input(function () {
            self.ErSlider.value(self.ErInput.value());
        });
    };

    this.unselectTool = function () {
        select("#options").html("");
    };
}
