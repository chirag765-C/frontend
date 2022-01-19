var gamepattern=[];
var buttoncolors=["red","blue","green","yellow"];
function nextsequence(){
var randomnumber=Math.floor(Math.random()*4);

var randomchoosencolor=buttoncolors[randomnumber];
gamepattern.push(randomchoosencolor);
}

$("#" + randomchoosecolor).fadeIn(100).fadeOut(100).fadeIn(100);
var audio=new Audio("/" +randomchoosecolor +".mp3");
audio.play();
nextsequence();