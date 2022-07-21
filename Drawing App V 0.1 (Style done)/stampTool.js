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
       
        if (mouseIsPressed){

            image(sticker,mouseX, mouseY, this.sizeSlider.value(), this.sizeSlider.value());
            // ---------------- Test code ---------------- 
                // In progess variables that will make the sticker center
                //  upon the mouse x and y. 
                // Issue is that since p5 is using the original image size, not the scaled one.
                // stickerX = mouseX - (sticker.width/2)
                // stickerY = mouseY - (sticker.height/2)
            // ---------------- Test code ---------------- 

            // ---------------- Test code ---------------- 
                // With this code it is intended to "upload" the 
                // if (this.img) {
                //     image(this.img, 100, 100, this.sizeSlider.value(), this.sizeSlider.value());    
                //     console.log(this.img);
                // };
            // ---------------- Test code ---------------- 

        };
    };

    // ---------------- Test code ----------------
    // This function will handle the input data from the user and if it's an image will create a p5 Image object
    this.handleFile= function(file){
        print(file);
        if (file.type === 'image') {
          this.img = createImg(file.data, '');
          this.img.hide();
        } else {
          this.img = null;
        }
    };
    // ---------------- Test code ---------------- 
    
    this.populateOptions = function(){

        this.sizeText = createDiv("Size: ");
        this.sizeText.parent("#controls");

        this.sizeSlider = createSlider(20, 100, 50);
        this.sizeSlider.parent("#controls");

        // ---------------- Test code ---------------- 
        // This code creates the HTML div for the tool
        upload = createFileInput(this.handleFile);
        upload.parent("#controls"); 
        // ---------------- Test code ---------------- 
    }

    this.unselectTool = function(){
        select("#controls").html("");
    }
};