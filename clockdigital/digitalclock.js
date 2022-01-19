function showtime(){
var date=new Date();
var h=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();
var session="AM";
if(h==0){
    h=12;
}
if(h>12){
    h=h-12;
    session="PM";
}

if(h<10){
    h="0"+h;
}
if(s<10){
    s="0"+s;
}
if(m<10){
    m="0"+m;
}
document.querySelector(".timing").innerHTML=h+":"+m+":"+s+ " "+session;


setTimeout(function(){
    showtime();
},100)
}
showtime();