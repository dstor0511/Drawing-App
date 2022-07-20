function StampTool (){
    // set an icon and name for the constructor function
    this.icon = "assets/sticker.png";
    this.name = "stamp";

    var self = this;

    this.draw = function(){
       
        if (mouseIsPressed){
            
            // In progess variables that will make the sticker center
            //  upon the mouse x and y. 
            // Issue is that since p5 is using the original image size, not the scaled one.
            // stickerX = mouseX - (sticker.width/2)
            // stickerY = mouseY - (sticker.height/2)

            image(sticker,mouseX, mouseY, this.sizeSlider.value(), this.sizeSlider.value());

        };
    };

    this.populateOptions = function(){

        this.sizeText = createDiv("Size: ");
        this.sizeText.parent("#controls");

        this.sizeSlider = createSlider(20, 100, 50);
        this.sizeSlider.parent("#controls");

    }

    this.unselectTool = function(){
        select("#controls").html("");
    }
};