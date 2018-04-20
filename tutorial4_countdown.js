When a page is loading,
$(document).ready(function (){

});

SetInterval(function(){
// everything in this bracket will run every 1 sec
},1000);

var date = new Date();
setInterval(function(){
    $('Timer').text
    (Math.round((new Date) / 1000)+ //round removes unique time stamp
     "second(s)");},
1000);