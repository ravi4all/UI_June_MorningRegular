function Song(id,name,url,image){
    this.id = id;
    this.name = name;
    this.url = url;
    this.image = image;
    this.delete = false;
}

var obj = {
    songsList : [],
    
    addSong : function(id,name,url,image){
        var song = new Song(id,name,url,image);
        this.songsList.push(song);
        console.log(this.songsList);
    },

    deleteSong : function(songId){
        // for(var i = 0; i < songsList.length; i++){
        //     if(songsList[i].id == songId){
        //         this.songsList[i].delete = true;
        //     }
        // }
        var toDelete = this.songsList.filter(function(obj){
                return obj.id == songId;
        })
        toDelete[0].delete = true;
        // console.log(toDelete);

        this.songsList = this.songsList.filter(function(obj){
            return obj.delete == false;
        })
        console.log("Updated list",this.songsList);
    }

}