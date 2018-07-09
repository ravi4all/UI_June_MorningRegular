// window.addEventListener("load", function(){
//     // Event Binding
//     document.getElementById("btn").addEventListener('click',showName());
// });

window.addEventListener("load",bindEvents);

function bindEvents(){
    console.log("Event Binded...");
    document.getElementById("btn").addEventListener('click',showName);
}

function showName(){
    console.log("Function Called...");
    var username = document.getElementById("box_1").value;
    document.getElementById("result").innerHTML = username;
}