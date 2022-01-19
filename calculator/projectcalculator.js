function calc(num){
    document.getElementById("outputvalue").innerHTML+=num;
}

document.querySelector(".solve").addEventListener("click",function(){
    var x= document.getElementById("outputvalue").innerHTML;
    document.getElementById("historyvalue").innerHTML=x;
    var y=eval(document.getElementById("outputvalue").innerHTML);
    document.getElementById("outputvalue").innerHTML=y;
})
function clr(){
    document.getElementById("historyvalue").innerHTML="";
    document.getElementById("outputvalue").innerHTML="";

}
// document.querySelector("#backspace").addEventListener("click",function(){
//     var num= document.getElementById("outputvalue").innerHTML;
//     var numlength=num.length;
//     console.log(num);
//     console.log(numlength);
//     document.getElementById("outputvalue").innerHTML=num.substr(0,numlength-1);
// })
function backspace(){
    var num= document.getElementById("outputvalue").innerHTML;
    var numlength=num.length;
    console.log(num);
    console.log(numlength);
    document.getElementById("outputvalue").innerHTML=num.substr(0,numlength-1);
}