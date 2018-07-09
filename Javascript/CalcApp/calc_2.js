window.addEventListener("load", bindEvent);

var firstNum;
var secondNum;
var result = 0;
function bindEvent(){
    firstNum = document.getElementById("f_num");
    secondNum = document.getElementById("s_num");
    buttons = document.getElementsByTagName("button");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click",calc);
    }
}

function calc(){
    var opr = event.srcElement.innerHTML;
    // console.log(opr);
    var expression = firstNum.value + opr + secondNum.value;
    // console.log(expression);
    var result = eval(expression);
    document.getElementById("result").innerHTML = result;
}