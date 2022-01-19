var insert1=prompt("Enter name of first player");
var insert2=prompt("Enter name of second player");
document.querySelector(".p1").innerHTML=insert1;
document.querySelector(".p2").innerHTML=insert2;



var random1=Math.floor(Math.random()*6)+1;
var random2=Math.floor(Math.random()*6)+1;
var imagesrc1="/images/dice"+random1+".png";
var imagesrc2="/images/dice"+random2+".png";
var name1=document.querySelectorAll("img")[0];
var name2=document.querySelectorAll("img")[1];

name1.setAttribute("src",imagesrc1);
name2.setAttribute("src",imagesrc2);


 if(random1>random2){
     document.querySelector("h1").innerHTML="Player "+ insert1 +" wins";
 }
 else{
    document.querySelector("h1").innerHTML="Player "+ insert2 +" wins";

 }