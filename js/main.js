var images = [];
images[0] = "img/AutoCoater.png";
images[1] = "img/";
images[2] = "autocoater.png";
images[3] = "autocoater.jpg";
images[4] = "autocoater.png";
images[5] = "autocoater.jpg";

var i = 0;
setInterval(fadeDivs, 3000);

function fadeDivs() {
    i = i < images.length ? i : 0;
    $('.product img').fadeOut(100, function(){
        $(this).attr('src', images[i]).fadeIn(100);
    })
    i++;
}