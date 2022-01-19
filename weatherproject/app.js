const { response } = require("express");
const express= require("express");
const bodyParser= require("body-parser");
const https= require("https");
const { urlencoded } = require("body-parser");

const app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){


res.sendFile(__dirname+"/index.html");
  
})
app.post("/",function(req,res){
    const query=req.body.cityname;
    const apikey="787eb651d18c2a204ac51736a13ffe75";
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+ apikey+"&unit=" + unit;
    https.get(url,function(response){
        response.on("data",function(data){
            const weatherdata=JSON.parse(data);
    const temp=weatherdata.main.temp;
    const weatherdescription=weatherdata.weather[0].description;
    const icon=weatherdata.weather[0].icon;
    const imageurl="http://openweathermap.org/img/wn/"+icon+"@2x.png"
    res.write("<h1>The temperature of Birgunj is " + temp +" degree</h1><br><h2>The weather today is '"+ weatherdescription + "'</h2>");
    res.write("<img src=" + imageurl +">");
      res.send();
        })
    })
})



// const query="London";
// const apikey="787eb651d18c2a204ac51736a13ffe75"
// const unit="metric";
// const url=

// https.get(url,function(response){

 

// response.on("data",function(data){
//     const weatherdata=JSON.parse(data);
//     const temp=weatherdata.main.temp;
//     const weatherdescription=weatherdata.weather[0].description;
//     const icon=weatherdata.weather[0].icon;
//     const imageurl="http://openweathermap.org/img/wn/"+icon+"@2x.png"
//     // console.log(temp);
//     res.write("<h1>The temperature of Birgunj is " + temp +" degree</h1><br><h2>The weather today is '"+ weatherdescription + "'</h2>");
//     res.write("<img src=" + imageurl +">");
//   res.send();
    
// })
// })


app.listen(3000,function(){
    console.log("My server is running in port in 3000");
  })