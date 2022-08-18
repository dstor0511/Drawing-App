function StampTool() {
  // set an icon and name for the constructor function
  this.icon = "assets/sticker.png";
  this.name = "stamp";

  var self = this;

  this.draw = function () {
    if (mouseIsPressed && mouseClickedOnCanvas()) {
      // First image drawn if selected
      // Second image drawn if selected
      // if (this.stampSelector.selected() == "Cool") {
      //   image(
      //     coolStamp,
      //     mouseX,
      //     mouseY,
      //     this.sizeSlider.value(),
      //     this.sizeSlider.value()
      //   );
      // }

      if (this.selector == "Cool") {
        image(coolStamp, mouseX, mouseY, this.sliderValue, this.sliderValue);
      } else if (this.selector.value() == "Wow") {
        image(wowStamp, mouseX, mouseY, this.sliderValue, this.sliderValue);
      }
      // Third image drawn if selected
      else if (this.selector.value() == "Robot") {
        image(robotStamp, mouseX, mouseY, this.sliderValue, this.sliderValue);
      }
      // Fourth image drawn if selected
      else if (this.selector.value() == "Stamp") {
        image(sticker, mouseX, mouseY, this.sliderValue, this.sliderValue);
      }
    }
  };

  this.populateOptions = function () {
    // Text created to the DOM when the extension is selected

    select(".options").html(
      "<div id='stampSize'>Size:</div>   <input type='range' min='20' max='300' value='90' id='stampOtionsSlider'> <label for='stampList'>Choose a stamp:</label> <select> name='stampList'  id='stampSelector'     <option value='Cool'>Cool</option> <option value='Wow'>Wow</option> <option value='Robot'>Robot</option> <option value='Stamp'>Stamp</option></select>"
    );

    this.sliderValue = select("#stampOtionsSlider").value();
    this.selector = select("#stampSelector").selected();
  };

  this.unselectTool = function () {
    select(".options").html("");
  };
}
