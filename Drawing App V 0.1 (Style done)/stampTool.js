function StampTool (){
    // set an icon and name for the constructor function
    this.icon = "assets/sticker.png";
    this.name = "stamp";

    // ---------------- Test code ---------------- 
    // Variables that will control the input img by the user
    this.upload;
    this.img;
    // ---------------- Test code ---------------- 

    var self = this;

    this.draw = function(){
       
        if (mouseIsPressed && mouseClickedOnCanvas()){

            image(sticker,mouseX, mouseY, this.sizeSlider.value(), this.sizeSlider.value());
            console.log(typeof(this.spanValue));
            // ---------------- Test code ---------------- 
                // In progess variables that will make the sticker center
                //  upon the mouse x and y. 
                // Issue is that since p5 is using the original image size, not the scaled one.
                // stickerX = mouseX - (sticker.width/2)
                // stickerY = mouseY - (sticker.height/2)
            // ---------------- Test code ---------------- 

        };
    };

    this.populateOptions = function(){

        // Text created to the DOM when the extension is selected
        this.sizeText = createDiv("Size: " + this.sizeSpan);
        this.sizeText.parent("#controls");
        this.sizeText.addClass("stampOtionsText");

        // Create Span
        this.sizeSpan = createSpan();
        this.sizeSpan.parent("#controls");

        // Slide created to the DOM when the extension is selected
        this.sizeSlider = createSlider(20, 100, 50);
        this.sizeSlider.parent("#controls");
        this.sizeSlider.addClass("stampOtionsSlider");
        
        
        // This stores the value of the slider
        this.sliderValue = this.sizeSlider.value();

        // This stores the span html inner value
        this.spanValue = this.sizeSpan.html();

        // This function should update the value of the span but 
        // its not doing it
        this.sizeSlider.oninput = function() {
            sizeSpan.innerHTML = this.value;
            // this.spanValue = this.sliderValue;
          }

    }

    this.unselectTool = function(){
        select("#controls").html("");
    }
};