function StampTool (){
    // set an icon and name for the constructor function
    this.icon = "assets/sticker.png";
    this.name = "stamp";
    this.stickerSliderSize = null;

    // var stickerSliderSize = createSlider(5, 50, 20);
    this.sticker = loadImage("assets/sticker.png");

    /*
    this.sliders = function(){
        // stickerSliderSize.parent(select(".options"))
        select(".options").html("<input type='range' min='5' max='50' value='20' class='slider' id='stickerSliderSize'>")

        // slider controller
        select("#stickerSliderSize").mouseClicked(function(){
            stickerSliderSize = select("#" + this.elt.id);
            console.log(24);

        })
    };
    */

    this.draw = function(){
       
        if (mouseIsPressed){
            for (var i = 0; i < stickerSliderSize.value(); i ++)
            {
                var stickerSize = stickerSliderSize.value();
                var stickerX = random((mouseX - stickerSize/2)-10, (mouseX - stickerSize/2)+10);
                var stickerY = random((mouseY - stickerSize/2)-10, (mouseY - stickerSize/2)+10);
                image(sticker, stickerX, stickerY, stickerSize, stickerSize);
            };
        };
    };
};