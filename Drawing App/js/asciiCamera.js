function AsciiArt() {
    this.icon = "assets/ascii.png";
    this.name = "Ascii";

    var video;
    var asciiDiv;

    var self = this;

    this.setup = function () {};
    video = createCapture(VIDEO);
    video.size(80, 40);
    video.hide();

    select("#ascii").hide();

    this.draw = function () {
        this.density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

        video.loadPixels();
        this.asciiImage = "";
        for (var j = 0; j < video.height; j++) {
            for (var i = 0; i < video.width; i++) {
                this.pixelIndex = (i + j * video.width) * 4;
                this.r = video.pixels[this.pixelIndex + 0];
                this.g = video.pixels[this.pixelIndex + 1];
                this.b = video.pixels[this.pixelIndex + 2];
                this.avg = (this.r + this.g + this.b) / 3;
                this.len = this.density.length;
                this.charIndex = floor(map(this.avg, 0, 255, 0, this.len));
                this.c = this.density.charAt(this.charIndex);
                if (this.c == " ") this.asciiImage += "&nbsp;";
                else this.asciiImage += this.c;
            }
            this.asciiImage += "<br/>";
        }
        asciiDiv.html(this.asciiImage);
    };

    this.populateOptions = function () {
        select("#ascii").show();

        asciiDiv = createDiv();
        asciiDiv.parent("#ascii");

        asciiInstructionsDiv = createDiv(
            "Grant camera access to see ascii art, smile! 😁"
        );
        asciiInstructionsDiv.parent("#options");
    };

    this.unselectTool = function () {
        asciiDiv.remove();
        loadPixels();
        select("#ascii").hide();
        select("#options").html("");
    };
}
