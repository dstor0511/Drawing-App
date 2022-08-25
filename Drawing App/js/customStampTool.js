function Custom_stamp() {
  //set an icon and a name for the object
  this.icon = "assets/stickers.png";
  this.name = "Custom_Stamp";

  var self = this;

  this.final_Img;
  this.tempImg = loadImage("assets/stickers.png");

  this.draw = function () {
    // draw the right image depending on the size selected
    // updatePixels();
    this.final_Img = this.tempImg;

    if (mouseIsPressed && mouseClickedOnCanvas()) {
      image(
        this.final_Img,
        mouseX,
        mouseY,
        this.slider1.value(),
        this.slider1.value()
      );
    }
    // loadPixels();
  };

  // this function updates the image to the one dropped by the user
  this.got = function (file) {
    this.tempImg = createImg(file.data, "").hide();
  };

  this.unselectTool = function () {
    select("#options").html("");
  };

  this.populateOptions = function () {
    // Here we create some DOM elemts the user is going to interact with when using the stamp tool
    // Create a slider, input, and selector variables for easines getting their values

    this.slider1 = createSlider(20, 300, 90);
    this.slider1.parent("#options");

    this.input = createInput("");
    this.input.parent("#options");

    this.slider1text = createDiv("Size: ");
    this.slider1text.parent("#options");

    // Assign and update the text box with the value of the slider
    // update the text box with the value of the slider
    this.input.value(this.slider1.value());
    this.slider1.mouseMoved(function () {
      self.input.value(self.slider1.value());
    });
    // update the slider with the value of the text box
    this.input.input(function () {
      self.slider1.value(self.input.value());
    });
  };
}
