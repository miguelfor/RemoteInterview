//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var input = "";

process.stdin.on('data', function (text) {
  input += text;
});

process.stdin.on('end', function () {
  //do your processing here.
  var cadena=input.split("\n");
  var cadena2;
  for(var i =1;i<=cadena[0];i++){
    cadena2=cadena[i].split(" ");
    cadena[i]=cadena2.reverse(); 
    var miguel;
    for(var j =0;j<cadena2.length;j++){
      if(j==0){
         miguel=cadena2[j];
      }else{
         miguel+=" "+
           cadena2[j];
      }
    }
    console.log(miguel);   
  }   
});