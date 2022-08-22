function StampTool() {
  // set an icon and name for the constructor function
  this.icon = "assets/sticker.png";
  this.name = "stamp";

  var self = this;

  this.draw = function () {
    // If the user clicks in the delimited zone of the Canvas then he will be able to paste the stamp on the canvas
    if (mouseIsPressed && mouseClickedOnCanvas()) {
      // Depending on the value selected on the drop-down a different image will be loaded and its size will depend on the value given by the slider.
      // Cool value selected image
      if (this.selector.value() == "Cool") {
        image(
          coolStamp,
          mouseX,
          mouseY,
          select("#stampOtionsSlider").value(),
          select("#stampOtionsSlider").value()
        );
      }
      // Wow value selected image
      else if (this.selector.value() == "Wow") {
        image(
          wowStamp,
          mouseX,
          mouseY,
          select("#stampOtionsSlider").value(),
          select("#stampOtionsSlider").value()
        );
      }
      // Robot value selected image
      else if (this.selector.value() == "Robot") {
        image(
          robotStamp,
          mouseX,
          mouseY,
          select("#stampOtionsSlider").value(),
          select("#stampOtionsSlider").value()
        );
      }
      // Stamp image drawn if selected
      else if (this.selector.value() == "Stamp") {
        image(
          sticker,
          mouseX,
          mouseY,
          select("#stampOtionsSlider").value(),
          select("#stampOtionsSlider").value()
        );
      }
    }
    console.log(this.sliderValue);
  };

  // Here we create all the DOM elemts that will control the size and type of image to be pasted on the Canvas
  this.populateOptions = function () {
    // Here we create a div to show the text "size" and its correspondend slider
    select(".options").html(
      "<div id='stampSize'>Size:</div>   <input type='range' min='20' max='300' value='90' id='stampOtionsSlider'>"
    );

    this.sliderValue = select("#stampOtionsSlider").value();

    // Create the selector using p5.dom for easines of extracting its value
    this.selector = createSelect();
    this.selector.parent("options");

    // Add the options to the drop-down list
    this.options = ["Wow", "Robot", "Cool", "Stamp"];
    for (var i = 0; i < this.options.length; i++) {
      this.selector.option(this.options[i]);
    }
  };

  this.unselectTool = function () {
    select(".options").html("");
  };
}
