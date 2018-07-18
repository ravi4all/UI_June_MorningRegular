window.addEventListener("load", initAjax);

function initAjax(){
    document.getElementById("matches").addEventListener("click", showCalendar);
    document.getElementById("cricketer").addEventListener("click", showCricketer);
}

function showCalendar(){
    var ul = document.getElementById("calendar");
    var xhttp =  new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var jsonData = this.responseText;
            var obj = JSON.parse(jsonData);
            var matchArray = obj.data;
            // console.log(matchArray);
            matchArray.forEach(function(x){
                var li = document.createElement("li");
                li.innerHTML = x.name + " " + x.date;
                ul.appendChild(li);
            });
        }
    }

    xhttp.open('get', 'data.json')
    xhttp.send();

}

function showCricketer(){
    var player = document.getElementById("player");
    var xhttp =  new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var jsonData = this.responseText;
            var obj = JSON.parse(jsonData);
            var p = document.createElement('p');
            var img = document.createElement('img');
            p.innerHTML = obj.profile;
            img.setAttribute('src', obj.imageURL);
            player.appendChild(img);
            player.appendChild(p);
        }
    }

    // xhttp.open('get', 'sachin.json');
    xhttp.open('get', 'https://raw.githubusercontent.com/ravi4all/UI_June_MorningRegular/master/sachin.json');
    xhttp.send();

}