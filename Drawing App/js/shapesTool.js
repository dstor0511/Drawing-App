function ShapesTool() {
    this.name = "Shapes";
    this.icon = "assets/geometric-shape.png";
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;
    var self = this;
    var shpButton;

    this.draw = function () {};
    this.populateOptions = function () {
        // Create Button
        shpButton = createButton("No Fill");
        shpButton.parent("#options");

        shpButton.mousePressed(function () {
            if (colourP.fill == true) {
                fill(colourP.selectedColour);
                colourP.fill = false;
                shpButton.html("&nbsp;&nbsp;No Fill&nbsp;&nbsp;");
            } else {
                noFill();
                colourP.fill = true;
                shpButton.html("&nbsp;&nbsp;Fill&nbsp;&nbsp;");
            }
        });

        // Create Selector
        this.shpSelector = createSelect();
        this.shpSelector.parent("#options");
        this.shpSelector.class("selector");
        this.shpOptions = ["Circle", "Square", "Triangle"];
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
