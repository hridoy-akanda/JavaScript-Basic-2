function times(){
    var date=new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    if(minutes<10){
        minutes="0"+minutes;
    }
    var seconds=date.getSeconds();
    if(seconds<10){
        seconds="0"+seconds;
    }
    var time=hours+":"+minutes+":"+seconds;
    var p=document.querySelector("p");
    p.innerText=time;
}

setInterval(function(){
    times();
},1000);


