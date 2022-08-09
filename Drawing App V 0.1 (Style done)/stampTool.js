function StampTool() {
  // set an icon and name for the constructor function
  this.icon = "assets/sticker.png";
  this.name = "stamp";

  // ---------------- Test code ----------------
  // Variables that will control the input img by the user
  this.upload;
  this.img;
  // ---------------- Test code ----------------

  var self = this;

  this.draw = function () {
    if (mouseIsPressed && mouseClickedOnCanvas()) {
      // First image drawn if selected 
      if (this.stampSelector.selected() == "Cool"){
        image(coolStamp, 
        mouseX,
        mouseY,
        this.sizeSlider.value(),
        this.sizeSlider.value()
        );
      }
      // Second image drawn if selected 
      else if(this.stampSelector.selected()== "Wow"){
        image(wowStamp,
          mouseX,
          mouseY,
          this.sizeSlider.value(),
          this.sizeSlider.value()
          );
      }
      // Third image drawn if selected 
      else if(this.stampSelector.selected()== "Robot"){
        image(robotStamp,
          mouseX,
          mouseY,
          this.sizeSlider.value(),
          this.sizeSlider.value()
          );
      }
      // Fourth image drawn if selected 
      else if(this.stampSelector.selected()== "Stamp"){
        image(sticker, 
          mouseX,
          mouseY,
          this.sizeSlider.value(),
          this.sizeSlider.value()
          );

      }
    }
  };

  this.populateOptions = function () {
    // Text created to the DOM when the extension is selected
    this.sizeText = createDiv("Size: ");
    this.sizeText.parent("controls");
    this.sizeText.id("stampSize")

    // Slide created to the DOM when the extension is selected
    this.sizeSlider = createSlider(20, 300, 90);
    this.sizeSlider.parent("stampSize");
    this.sizeSlider.addClass("stampOtionsSlider");

    // This stores the value of the slider
    this.sliderValue = this.sizeSlider.value();


    // Create div containing the selector
    this.selectorDiv = createDiv("Choose your fav stamp 🤩:");
    this.selectorDiv.parent("#controls");
    this.selectorDiv.id("stampSelectorDiv");

    // Create the selector and assign it to its div
    this.stampSelector = createSelect();
    this.stampSelector.parent("stampSelectorDiv");
    this.stampSelector.id("stampSelector")

    // Fill up the option of the div
    this.stickerNames = ["Cool", "Wow", "Robot", "Stamp"];
    for (var i = 0; i < this.stickerNames.length; i++){
      this.stampSelector.option(this.stickerNames[i]);
    };
  };

  this.unselectTool = function () {
    select("#controls").html("");
  };
}
