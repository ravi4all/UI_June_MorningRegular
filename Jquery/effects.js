$(document).ready(function(){

    // Hide/Show
    $("#hide").click(function(){
        // $("img").hide(1000);
        $("img").hide("slow");
    })
    $("#show").click(function(){
        // $("img").show(1000);
        $("img").show("fast");
    })
    $("#toggle").click(function(){
        $("img").toggle(100000);
    })

    // FadeIn / FadeOut
    $("#out").click(function(){
        $("img").fadeOut(1000);
    });
    $("#in").click(function(){
        $("img").fadeIn(1000);
    });
    $("#f_toggle").click(function(){
        $("img").fadeToggle(1000);
    });

    // SlideUp/SlideDown
    $("#slideUp").click(function(){
        $("#animate").slideUp(1000);
    });
    $("#slideDown").click(function(){
        $("#animate").slideDown(1000);
    });
    $("#s_toggle").click(function(){
        $("#animate").slideToggle(1000);
    });

})