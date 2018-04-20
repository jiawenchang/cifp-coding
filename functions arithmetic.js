//f(x) + 2
//argument
function addThreeNumbers(w,x,y){
    var intermediate = w + x + y;
    subtractTen(intermediate)
}

function subtractTen(z){
    var multiple = (z-10);
    multiplyByTen(multiple)
}

//CALLED A FUNCTION

function multiplyByTen(random){
    console.log(random * 100);
}

function theFirst (x , y){
    console.log(x * y);
}
theFirst (2 , 4); // called a function


function theSecond (a , b , c){
    if (a == b && a == c && b == c){ // "==" used for comparison
        console.log('same');
    }
    else{
        console.log('not');
    }
}
theSecond(2,2,2);


