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

var titleText = ["s", "o", "u", "n", "d", "c", "l", "o", "u", "t", "soundclout"];

function loop(){

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
