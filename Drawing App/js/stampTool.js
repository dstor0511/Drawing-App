function StampTool() {
    // set an icon and name for the constructor function
    this.icon = "assets/sticker.png";
    this.name = "Stamp_Tool";

    var self = this;

    var stampSelector;

    this.draw = function () {
        // If the user clicks in the delimited zone of the Canvas then he will be able to paste the stamp on the canvas
        if (mouseIsPressed && mouseClickedOnCanvas()) {
            // Depending on the value selected on the drop-down a different image will be loaded and its size will depend on the value given by the slider.

            // Cool image drawn if selected
            if (stampSelector.value() == "Cool") {
                image(
                    coolStamp,
                    mouseX,
                    mouseY,
                    this.stampSlider.value(),
                    this.stampSlider.value()
                );
            }
            // Wow image drawn if selected
            else if (stampSelector.value() == "Wow") {
                image(
                    wowStamp,
                    mouseX,
                    mouseY,
                    this.stampSlider.value(),
                    this.stampSlider.value()
                );
            }
            // Robot image drawn if selected
            else if (stampSelector.value() == "Robot") {
                image(
                    robotStamp,
                    mouseX,
                    mouseY,
                    this.stampSlider.value(),
                    this.stampSlider.value()
                );
            }
            // Stamp image drawn if selected
            else if (stampSelector.value() == "Stamp") {
                image(
                    sticker,
                    mouseX,
                    mouseY,
                    this.stampSlider.value(),
                    this.stampSlider.value()
                );
            }
        }
    };

    // Here we create all the DOM elemts that will control the size and type of image to be pasted on the Canvas
    this.populateOptions = function () {
        // Here we create some DOM elemts the user is going to interact with when using the stamp tool
        select("#options").html(
            "<label class='label'>Size: </label>  <input type='range' min='20' max='300' value='90' id='stampSlider' class='slider'>  <input type='text' id='stampTextBox' class='textBox'>  <br> <label id='selectorLabel'>Choose a stamp: </label>"
        );

        // Create a slider, input, and selector variables for easines getting their values
        this.stampSlider = select("#stampSlider");
        this.stampSizeText = select("#stampTextBox");

        stampSelector = createSelect();
        stampSelector.class("selector");
        stampSelector.parent("#options");
        // Assign and update the text box with the value of the slider
        // update the text box with the value of the slider
        this.stampSizeText.value(this.stampSlider.value());
        this.stampSlider.mouseMoved(function () {
            self.stampSizeText.value(self.stampSlider.value());
        });
        // update the slider with the value of the text box
        this.stampSizeText.input(function () {
            self.stampSlider.value(self.stampSizeText.value());
        });

        // Add the options to the selector
        this.options = ["Wow", "Robot", "Cool", "Stamp"];
        for (var i = 0; i < this.options.length; i++) {
            stampSelector.option(this.options[i]);
        }
    };

    this.unselectTool = function () {
        select("#options").html("");
        loadPixels();
    };
}
