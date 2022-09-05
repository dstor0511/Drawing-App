function AsciiArt() {
    this.icon = "assets/ascii.png";
    this.name = "Ascii";

    var video;
    var asciiDiv;
    var self = this;
    // Create the video capture element and add it to the DOM
    video = createCapture(VIDEO);
    video.size(80, 40);
    video.hide();

    this.draw = function () {
        // Array of characters to use for the ASCII art
        this.density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

        // Get the pixel data from the video element
        video.loadPixels();
        this.asciiImage = "";
        // Loop through the video height and start storing the character to be used
        for (var j = 0; j < video.height; j++) {
            // Loop through the video height and start storing the character to be used
            for (var i = 0; i < video.width; i++) {
                // Get the pixel index for each pixel in the screen
                this.pixelIndex = (i + j * video.width) * 4;

                // Get the "brightness" of the pixel
                this.r = video.pixels[this.pixelIndex + 0];
                this.g = video.pixels[this.pixelIndex + 1];
                this.b = video.pixels[this.pixelIndex + 2];

                // Average the brightness of the pixel and store it to be used later to map characters to the brightness
                this.avg = (this.r + this.g + this.b) / 3;

                this.len = this.density.length;
                // Map the brightness to the character array
                this.charIndex = floor(map(this.avg, 0, 255, 0, this.len));

                // Get the character of density to be used and if a space is used, add a space to the string but in HTML elements, spaces are ignored so we add a non-breaking space
                this.c = this.density.charAt(this.charIndex);
                if (this.c == " ") this.asciiImage += "&nbsp;";
                else this.asciiImage += this.c;
            }
            this.asciiImage += "<br/>";
        }
        // Create the div element and add the ASCII art to it
        asciiDiv.html(this.asciiImage);
    };

    this.populateOptions = function () {
        // Display the container of the ascii div
        select("#ascii").show();

        // Create the div that will contain the ASCII art
        asciiDiv = createDiv();
        asciiDiv.parent("#ascii");

        // Display instructions in .options div
        asciiInstructionsDiv = createDiv(
            "Grant camera access to see ascii art, smile! 😁"
        );
        asciiInstructionsDiv.parent("#options");
        asciiInstructionsDiv.class("label");
        asciiInstructionsDiv.id("asciiInstructions");
    };

    this.unselectTool = function () {
        asciiDiv.remove();
        loadPixels();
        select("#ascii").hide();
        select("#options").html("");
    };
}
