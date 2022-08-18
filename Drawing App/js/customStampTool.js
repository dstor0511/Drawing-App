// !Work in progress ⚠️

function Custom_stamp() {
  //set an icon and a name for the object
  this.icon = "assets/wow.png";
  this.name = "custom_stamp";

  var img;
  this.im = loadImage("assets/wow.png");

  this.draw = function () {
    // draw the right image depending on the size selected
    updatePixels();
    img = this.im;
    /*
    if (item1 !== undefined) {
      // draw and save the image
      if (mouseIsPressed) {
        if (mouseY > 5 && mouseX > 1) {
          image(img, mouseX, mouseY);
        }
      }
      loadPixels();
      imgPreview(img);
    }
    */
    if (mouseIsPressed) {
      if (mouseY > 5 && mouseX > 1) {
        image(img, mouseX, mouseY);
      }
    }
    loadPixels();
    // imgPreview(img);
  };

  // this function updates the image to the one dropped by the user
  this.got = function (file) {
    this.im = createImg(file.data, "").hide();
  };

  // clear options
  this.unselectTool = function () {
    select(".options").html("");
  };

  // write the intructions on how the user should drp their own image
  this.populateOptions = function () {
    select(".options").html(
      "To use Custom Stamp tool, first Drag an image onto the canvas at any time to set the image used for this tool <br> after select a size on the top right selector."
    );
  };
}
