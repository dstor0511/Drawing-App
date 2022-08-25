function StampTool() {
  // set an icon and name for the constructor function
  this.icon = "assets/sticker.png";
  this.name = "Stamp_Tool";

  var self = this;

  this.draw = function () {
    // If the user clicks in the delimited zone of the Canvas then he will be able to paste the stamp on the canvas
    if (mouseIsPressed && mouseClickedOnCanvas()) {
      // Depending on the value selected on the drop-down a different image will be loaded and its size will depend on the value given by the slider.

      // Cool image drawn if selected
      if (this.selector.value() == "Cool") {
        image(
          coolStamp,
          mouseX,
          mouseY,
          this.slider.value(),
          this.slider.value()
        );
      }
      // Wow image drawn if selected
      else if (this.selector.value() == "Wow") {
        image(
          wowStamp,
          mouseX,
          mouseY,
          this.slider.value(),
          this.slider.value()
        );
      }
      // Robot image drawn if selected
      else if (this.selector.value() == "Robot") {
        image(
          robotStamp,
          mouseX,
          mouseY,
          this.slider.value(),
          this.slider.value()
        );
      }
      // Stamp image drawn if selected
      else if (this.selector.value() == "Stamp") {
        image(
          sticker,
          mouseX,
          mouseY,
          this.slider.value(),
          this.slider.value()
        );
      }
    }
  };

  // Here we create all the DOM elemts that will control the size and type of image to be pasted on the Canvas
  this.populateOptions = function () {
    // Here we create some DOM elemts the user is going to interact with when using the stamp tool
    select("#options").html(
      "<label id='sliderLabel'>Size: </label>  <input type='range' min='20' max='300' value='90' id='stampSlider'>  <input type='text' id='stampTextBox'>  <br> <label id='selectorLabel'>Choose a stamp: </label><select id='stampSelector'></select>"
    );

    // Create a slider, input, and selector variables for easines getting their values
    this.slider = select("#stampSlider");
    this.sizeText = select("#stampTextBox");
    this.selector = select("#stampSelector");

    // Assign and update the text box with the value of the slider
    // update the text box with the value of the slider
    this.sizeText.value(this.slider.value());
    this.slider.mouseMoved(function () {
      self.sizeText.value(self.slider.value());
    });
    // update the slider with the value of the text box
    this.sizeText.input(function () {
      self.slider.value(self.sizeText.value());
    });

    // Add the options to the selector
    this.options = ["Wow", "Robot", "Cool", "Stamp"];
    for (var i = 0; i < this.options.length; i++) {
      this.selector.option(this.options[i]);
    }
  };

  this.unselectTool = function () {
    select("#options").html("");
    loadPixels();
  };
}
