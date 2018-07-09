window.addEventListener("load", bindEvent);

var firstNum;
var secondNum;
var result = 0;
function bindEvent(){
    firstNum = document.getElementById("f_num");
    secondNum = document.getElementById("s_num");
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("sub").addEventListener("click", sub);
    document.getElementById("div").addEventListener("click", div);
    document.getElementById("mul").addEventListener("click", mul);
}

function add(){
    result = parseInt(firstNum.value) + parseInt(secondNum.value);
    document.getElementById("result").innerHTML = result;
}
function sub(){
    result = parseInt(firstNum.value) - parseInt(secondNum.value);
    document.getElementById("result").innerHTML = result;
}
function div(){
    result = parseInt(firstNum.value) / parseInt(secondNum.value);
    document.getElementById("result").innerHTML = result;
}
function mul(){
    result = parseInt(firstNum.value) * parseInt(secondNum.value);
    document.getElementById("result").innerHTML = result;
}