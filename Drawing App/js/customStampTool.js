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
        this.cStampSlider.value(),
        this.cStampSlider.value()
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
    this.cStampLabel = createElement("label", "Size: ");
    this.cStampLabel.parent("#options");
    this.cStampLabel.class("label");

    // Create slider
    this.cStampSlider = createSlider(20, 300, 90);
    this.cStampSlider.parent("#options");
    this.cStampSlider.class("slider");

    // Create text input field
    this.cStampInput = createInput("");
    this.cStampInput.parent("#options");
    this.cStampInput.class("textBox");

    // Create DIV that prevents bugs at the moment of changing between tools
    this.csDiv = createDiv();
    this.csDiv.parent("#options");

    // Assign and update the text box with the value of the slider and viseversa
    this.cStampInput.value(this.cStampSlider.value());
    
    this.cStampSlider.mouseMoved(function () {
      self.cStampInput.value(self.cStampSlider.value());
    });
    // update the slider with the value of the text box
    this.cStampInput.input(function () {
      self.cStampSlider.value(self.cStampInput.value());
    });
  };

  this.unselectTool = function () {
    select("#options").html("");
  };
}
