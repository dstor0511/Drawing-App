function StampTool (){
    // set an icon and name for the constructor function
    this.icon = "assets/sticker.png";
    this.name = "stamp";
    this.upload;
    this.img;

    var self = this;

    this.draw = function(){
       
        if (mouseIsPressed){
            
            // In progess variables that will make the sticker center
            //  upon the mouse x and y. 
            // Issue is that since p5 is using the original image size, not the scaled one.
            // stickerX = mouseX - (sticker.width/2)
            // stickerY = mouseY - (sticker.height/2)

            // image(sticker,mouseX, mouseY, this.sizeSlider.value(), this.sizeSlider.value());

            // test code
            image(this.img, mouseX, mouseY, this.sizeSlider.value(), this.sizeSlider.value());
            if (this.img) {
                
            };

        };
    };

    // test code
    this.handleFile= function(file){
        print(file);
        if (file.type === 'image') {
          this.img = createImg(file.data, '');
        //   this.img.hide();
        } else {
          this.img = null;
        }
    }

    this.populateOptions = function(){

        this.sizeText = createDiv("Size: ");
        this.sizeText.parent("#controls");

        this.sizeSlider = createSlider(20, 100, 50);
        this.sizeSlider.parent("#controls");

        upload = createFileInput(this.handleFile);
        upload.parent("#controls"); 
    }

    this.unselectTool = function(){
        select("#controls").html("");
    }
};