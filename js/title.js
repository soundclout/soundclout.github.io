if(document.addEventListener){
    document.addEventListener("DOMContentLoaded", function(){
        loaded();
    });
} else if(document.attachEvent){
    document.attachEvent("onreadystatechange", function(){
        loaded();
    });
}

function loaded(){

    setInterval(loop, 600);

}

var x = 0;

var titleText = ["s", "so", "sou", "soun", "sound", "soundc", "soundcl", "soundclo", "soundclou","soundclout"];

function loop(){

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
