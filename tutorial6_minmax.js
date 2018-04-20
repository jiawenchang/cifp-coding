//function myFunction is only declaration, calling a function runs the function.
//Function call refers to e.g  myFunction();

//Question4
function add(x, y) {
  var ans = x + y;
  console.log(ans);
}
add(5, 6);
add(10, 20);
add(-5, 2);

//Question6 
functionSecond(a,b){
    var ans = a - b;
    if (ans < 0){
console.log("a is smaller than b");
    } else{
        console.log("a is larger than b");
    }
    
}
Second(20,10)//or math.min, math.max
function test(a,b){                                        
    var answer =Math.min(a,b);
    console.log(answer);
}
test(2,10);