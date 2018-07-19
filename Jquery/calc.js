$(document).ready(function(){

    var f_num = $("#box_1");
    var s_num = $("#box_2");

    $("button").click(function(){
        var opr = $(this).html();
        // console.log(opr);
        var expression = f_num.val() + opr + s_num.val();
        var result = eval(expression);
        // console.log(expression);
        $("span").html(result);
    })

})