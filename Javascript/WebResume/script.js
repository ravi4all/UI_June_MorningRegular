var container;
var charX = 0;
var moveX = 0;
var image;
window.addEventListener("load", function(){
    
    var screenHeight = window.innerHeight;
    container = document.getElementById("container");
    container.style.height = screenHeight+"px";

    image = document.getElementById("image");

    document.getElementById("body").addEventListener("keyup",movePlayer);
});

function movePlayer(){
    var key = event.keyCode;
    // console.log(key);
    if (key == 39){
        moveX = -200;
        charX += moveX;
        container.style.transform = 'translateX('+charX+'px)';
        image.style.transform = 'rotateY(0deg)';
    }
    else if(key == 37){ 
        moveX = 200;
        charX += moveX;
        container.style.transform = 'translateX('+charX+'px)';
        image.style.transform = 'rotateY(180deg)';
    }
}