$(document).ready(function(){
    var img = $("img");
    $("button").click(function(){
        // img.animate({
        //     left : '300px',
        //     top : '200px',
        //     opacity : 0.5
        // },5000)
        img.animate({left : '200px', width : '300px'}, 2000);
        img.animate({top : '40px', width : '500px'},2000);
        img.animate({opacity : '0.5', top : '0px', right : '0px'});
    })
})