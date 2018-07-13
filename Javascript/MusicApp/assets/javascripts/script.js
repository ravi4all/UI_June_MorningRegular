window.addEventListener("load", initEvents);

var audio;
var slider;
var span;

function initEvents(){
    audio = document.getElementById("audio");
    var ul = document.getElementById("songsList");
    span = document.getElementById("songCovered");
    slider = document.getElementById("slider");

    slider.addEventListener("change", seekSong);
    
    document.getElementById("play").addEventListener("click", startSong);
    document.getElementById("pause").addEventListener("click", pauseSong);
    for(var i = 0; i < songsArray.length; i++) {
        var li = document.createElement("li");
        var icon = document.createElement("img");
        icon.setAttribute('src', 'assets/images/play.png');
        li.innerHTML = songsArray[i].songName;
        li.appendChild(icon);
        li.className = 'list-group-item';
        ul.appendChild(li);
        li.addEventListener("click", playSong);
    }
}

function playSong() {
    var songName = event.srcElement.innerText;
    var songUrl;
    for(var i = 0; i < songsArray.length; i++){
        if (songsArray[i].songName == songName){
            songUrl = songsArray[i].songUrl;
        }
    }
    audio.src = songUrl;
    audio.play();
    setInterval(function(){
        slider.value = audio.currentTime;
        // console.log(audio.currentTime);
        span.style.width = (slider.value / 3)+'%';
        console.log(slider.value);
    }, 500);
    setTimeout(function(){
        var duration = audio.duration;
        slider.max = duration;
    },500);

}

function startSong(){
    audio.play();
}

function pauseSong(){
    audio.pause();
}

function seekSong(){
    audio.currentTime = slider.value;
}


