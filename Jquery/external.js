$(document).ready(function(){
    // $("button").click(function(){
    //     var username = $("input").val();
    //     $("span").html(username);
    // })

    $("#btn").on("click", function(){
        var username = $("#box_1").val();
        $("#output").html(username);
    })
    
})