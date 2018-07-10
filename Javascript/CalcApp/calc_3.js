window.addEventListener("load", initEvent);

var textBox;
var span;
function initEvent(){
    textBox = document.getElementById("box_1");
    span = document.getElementById("toCalculate");
    
    var buttons = document.getElementsByClassName("opr");
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", appendOperation);
    }

    document.getElementById("calculate").addEventListener("click",calculate);

    createButtons();
}

function createButtons(){
    var buttonsConatiner = document.getElementById("calc");
    // var btn = document.createElement("button");
    // btn.innerHTML = "Click Here";
    // buttonsConatiner.appendChild(btn);

    for(var i = 0; i<=9; i++){ 
        var btn = document.createElement("button");
        btn.innerHTML = i;
        // btn.setAttribute('')
        btn.className = 'btn';
        btn.style.color = 'red';
        buttonsConatiner.appendChild(btn);
        btn.addEventListener("click", insertValue);
    }
}

function insertValue(){
    var value = event.srcElement.innerHTML;
    textBox.value += value;
}

function appendOperation(){
    var opr = event.srcElement.innerHTML;
    textBox.value += opr;
    span.innerHTML += textBox.value;
    textBox.value = "";
}

function calculate(){
    span.innerHTML += textBox.value;
    var expression = span.innerHTML;
    // console.log(expression);
    var result = eval(expression);
    textBox.value = result;
    span.innerHTML = "";
}