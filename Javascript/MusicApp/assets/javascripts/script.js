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

    document.getElementById("savePlaylist").addEventListener("click", savePlaylist);
    
    document.getElementById("play").addEventListener("click", startSong);
    document.getElementById("pause").addEventListener("click", pauseSong);
    for(var i = 0; i < songsArray.length; i++) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        // var icon = document.createElement("img");
        // icon.className = 'play_icon';
        var playListBtn = document.createElement("button");
        playListBtn.innerHTML = 'Add to playlist';
        playListBtn.className = 'btn btn-primary';
        var coverImg = document.createElement('img');
        coverImg.setAttribute('src', songsArray[i].songImage);
        coverImg.className = 'cover';
        // icon.setAttribute('src', 'assets/images/play.png');
        span.innerHTML = songsArray[i].songName;
        // li.appendChild(icon);
        li.appendChild(span);
        li.appendChild(coverImg);
        li.appendChild(playListBtn);
        li.className = 'list-group-item';
        ul.appendChild(li);
        span.addEventListener("click", playSong);
        playListBtn.addEventListener("click", addToPlayList);
    }
}

function savePlaylist(){
    
}

function playSong() {
    console.log("Playing Song",songName);
    // var songName = event.srcElement.parentElement.childNodes[0].data;
    var songName = event.srcElement.innerHTML;
    var songCoverImg;
    var songUrl;
    console.log("song Array is ",songsArray,"SOng Name ",songName);
    for(var i = 0; i < songsArray.length; i++){
        if (songsArray[i].songName == songName){
            songUrl = songsArray[i].songUrl;
            console.log("SOng URL is ",songUrl," Type of ",typeof songUrl);
            songCoverImg = songsArray[i].songImage;
            // console.log(songUrl);
        }
    }
    changeCover(songCoverImg);
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

function changeCover(coverImg) {
    var img = document.getElementById("coverImage");
    img.setAttribute('src', coverImg);
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

function addToPlayList(){
    console.log("Song added to playlist");
    var ul = document.getElementById("playList");
    var songName = event.srcElement.parentElement.childNodes[0].innerHTML;
    songsArray.forEach(function(obj){
        if (obj.songName == songName){
            var li = document.createElement('li');
            var span = document.createElement("span");
            var playListBtn = document.createElement("button");
            playListBtn.innerHTML = 'Delete';
            playListBtn.className = 'btn btn-primary';
            var coverImg = document.createElement('img');
            coverImg.setAttribute('src', obj.songImage);
            coverImg.className = 'cover';
            span.innerHTML = obj.songName;
            li.appendChild(playListBtn);
            li.appendChild(coverImg);
            li.className = 'list-group-item';
            ul.appendChild(li);
            li.appendChild(span);
            span.addEventListener("click", playSong);
            playListBtn.addEventListener("click", deleteFromPlaylist);
        }
    })
}

function deleteFromPlaylist(){
    event.srcElement.parentElement.style.display = 'none';
}