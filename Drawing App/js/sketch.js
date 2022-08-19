//global variables that will store the toolbox colour palette
//and the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;

// variables that will store the images to be used in stamp tool
var sticker, coolStamp, wowStamp, robotStamp;

// preload the images that are to be used in the stampTool
function preload() {
  // Sticker icon and
  // <a href="https://www.flaticon.com/free-icons/sticker" title="sticker icons">Sticker icons created by Freepik - Flaticon</a>
  sticker = loadImage("assets/sticker.png");

  // Cool icon load
  // <a href="https://www.flaticon.com/free-icons/cool" title="cool icons">Cool icons created by Freepik - Flaticon</a>
  coolStamp = loadImage("assets/cool.png");

  // Wow icon load
  // <a href="https://www.flaticon.com/free-icons/wow" title="wow icons">Wow icons created by Freepik - Flaticon</a>
  wowStamp = loadImage("assets/wow.png");

  // Robot icon load
  // <a href="https://www.flaticon.com/free-icons/cool" title="cool icons">Cool icons created by Freepik - Flaticon</a>
  robotStamp = loadImage("assets/robot.png");

  // Custom Stamp icon load
  // <a href="https://www.flaticon.com/free-icons/sticker" title="sticker icons">Sticker icons created by iconixar - Flaticon</a>
  customStamp = loadImage("assets/stickers.png");
}

function setup() {
  //create a canvas to fill the content div from index.html
  canvasContainer = select("#content");
  var c = createCanvas(
    canvasContainer.size().width,
    canvasContainer.size().height
  );
  c.parent("content");

  //create helper functions and the colour palette
  helpers = new HelperFunctions();
  colourP = new ColourPalette();

  //create a toolbox for storing the tools
  toolbox = new Toolbox();

  //add the tools to the toolbox.
  toolbox.addTool(new FreehandTool());
  toolbox.addTool(new LineToTool());
  toolbox.addTool(new SprayCanTool());
  toolbox.addTool(new mirrorDrawTool());
  toolbox.addTool(new StampTool());
  var customStmp = new Custom_stamp();
  c.drop((file) => {
    customStmp.got(file);
  });
  toolbox.addTool(customStmp);
  background(255);
}

function draw() {
  //call the draw function from the selected tool.
  //hasOwnProperty is a javascript function that tests
  //if an object contains a particular method or property
  //if there isn't a draw method the app will alert the user
  if (toolbox.selectedTool.hasOwnProperty("draw")) {
    toolbox.selectedTool.draw();
  } else {
    alert("it doesn't look like your tool has a draw method!");
  }
}
