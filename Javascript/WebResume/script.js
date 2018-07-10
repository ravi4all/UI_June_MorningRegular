var container;
window.addEventListener("load", function(){
    
    var screenHeight = window.innerHeight;
    container = document.getElementById("container");
    container.style.height = screenHeight+"px";

    document.getElementById("body").addEventListener("keyup",movePlayer);
});

function movePlayer(){
    var key = event.keyCode;
    // console.log(key);
    if (key == 39){
        container.style.transform = 'translateX(-10px)';
    }
    else if(key == 37){ 

    }
}