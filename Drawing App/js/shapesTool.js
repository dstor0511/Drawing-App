function ShapesTool() {
    this.name = "Shapes";
    this.icon = "assets/geometric-shape.png";
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;
    var shpButton;

    this.draw = function () {
        if (mouseIsPressed && mouseClickedOnCanvas()) {
            if (startMouseX == -1) {
                // Update the variables to the current mouse position
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels();
            } else {
                updatePixels();
                if (this.shpSelector.value() == "Circle") {
                    ellipse(
                        startMouseX,
                        startMouseY,
                        mouseX - startMouseX,
                        mouseX - startMouseX
                    );
                } else if (this.shpSelector.value() == "Rectangle") {
                    rect(
                        startMouseX,
                        startMouseY,
                        mouseX - startMouseX,
                        mouseY - startMouseY
                    );
                } else if (this.shpSelector.value() == "Triangle") {
                    triangle(
                        startMouseX,
                        startMouseY,
                        mouseX,
                        mouseY,
                        startMouseX + startMouseY - mouseY,
                        mouseY
                    );
                }
            }
        } else if (drawing) {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    };

    this.populateOptions = function () {
        // Create Button
        shpButton = createButton("No Fill");
        shpButton.parent("#options");
        shpButton.class("button");
        shpButton.id("shpButton");

        shpButton.mousePressed(function () {
            if (colourP.fill == true) {
                fill(colourP.selectedColour);
                colourP.fill = false;
                shpButton.html("No Fill");
            } else {
                noFill();
                colourP.fill = true;
                shpButton.html("Fill");
            }
        });

        // Create Selector Label
        this.shpLaber = createElement("label", "Shape: ");
        this.shpLaber.parent("#options");
        this.shpLaber.id("selectorLabel");

        // Create Selector
        this.shpSelector = createSelect();
        this.shpSelector.parent("#options");
        this.shpSelector.class("selector");
        this.shpOptions = ["Circle", "Rectangle", "Triangle"];
        for (var i = 0; i < this.shpOptions.length; i++) {
            this.shpSelector.option(this.shpOptions[i]);
        }

        // Create DIV to avoid bugs
        this.shpDiv = createDiv();
        this.shpDiv.parent("#options");
    };

    this.unselectTool = function () {
        // Set the current tool to this tool
        select("#options").html("");
        colourP.fill = false;
    };
}
