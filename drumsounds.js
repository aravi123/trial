var a=document.getElementById('a');
var s=document.getElementById('s');
var d=document.getElementById('d');
var f=document.getElementById('f');
var g=document.getElementById('g');
var h=document.getElementById('h');
var j=document.getElementById('j');
var k=document.getElementById('k');
var l=document.getElementById('l');

function stopfunc(){
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio6.pause();
    audio6.currentTime = 0;
    audio7.pause();
    audio7.currentTime = 0;
    audio8.pause();
    audio8.currentTime = 0;
    audio9.pause();
    audio9.currentTime = 0;
}

document.body.addEventListener('keydown',function(event){
    var key=event.keyCode;
    stopfunc();
    if (key==65){
        a.classList.add('a');
        document.getElementById('audio1').play();
    }
    else if (key==83){
        s.classList.add('s');
        document.getElementById('audio2').play();
    }
    else if (key==68){
        d.classList.add('d');
        document.getElementById('audio3').play();
    }
    else if (key==70){
        f.classList.add('f');
        document.getElementById('audio4').play();
    }
    else if (key==71){
        g.classList.add('g');
        document.getElementById('audio5').play();
    }
    else if (key==72){
        h.classList.add('h');
        document.getElementById('audio6').play();
    }
    else if (key==74){
        j.classList.add('j');
        document.getElementById('audio7').play();
    }
    else if (key==75){
        k.classList.add('k');
        document.getElementById('audio8').play();
    }
    else if (key==76){
        l.classList.add('l');
        document.getElementById('audio9').play();
    }
})
document.body.addEventListener('keyup',function(event){
    var key=event.keyCode;
    if (key==65){
        a.classList.remove('a');
    }
    else if (key==83){
        s.classList.remove('s');
    }
    else if (key==68){
        d.classList.remove('d');
    }
    else if (key==70){
        f.classList.remove('f');
    }
    else if (key==71){
        g.classList.remove('g');
    }
    else if (key==72){
        h.classList.remove('h');
    }
    else if (key==74){
        j.classList.remove('j');
    }
    else if (key==75){
        k.classList.remove('k');
    }
    else if (key==76){
        l.classList.remove('l');
    }
})
console.log("edited111");
$.get("a1a9pfh1z4hsle-ats.iot.us-east-2.amazonaws.com",(data)=>{
    console.log(data);
})