function Custom_stamp() {
  //set an icon and a name for the object
  this.icon = "assets/stickers.png";
  this.name = "Custom_Stamp";

  var self = this;

  this.final_Img;
  this.tempImg = loadImage("assets/stickers.png");

  this.draw = function () {
    // draw the dropped image by the user, size depends on the value given by the slider

    // Default image drawn if no image is dropped
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
  };

  // this function updates the image to the one dropped by the user
  this.got = function (file) {
    this.tempImg = createImg(file.data, "").hide();
  };

  this.populateOptions = function () {
    // Here we create some DOM elemets the user is going to interact with when using the custom stamp tool, a slider and a text imput field

    // Create slider label
    this.slider1label = createElement("label", "Size: ");
    this.slider1label.parent("#options");
    this.slider1label.class("label");

    // Create slider
    this.slider1 = createSlider(20, 300, 90);
    this.slider1.parent("#options");
    this.slider1.class("slider");

    // Create text input field
    this.input = createInput("");
    this.input.parent("#options");
    this.input.class("textBox");

    // Create DIV that prevents bugs at the moment of changing between tools
    this.csDiv = createDiv();
    this.csDiv.parent("#options");

    // Assign and update the text box with the value of the slider and viseversa
    this.input.value(this.slider1.value());
    this.slider1.mouseMoved(function () {
      self.input.value(self.slider1.value());
    });
    // update the slider with the value of the text box
    this.input.input(function () {
      self.slider1.value(self.input.value());
    });
  };

  this.unselectTool = function () {
    select("#options").html("");
  };
}
