var ml = [210, 230, 302, 530, 488, 501, 320, 330, 370, 221, 199, 50, 301, 180,
    250, 450, 600, 225, 325, 475];
var ids = [1,2,4,1,3,2,5,1,2,3,4,5,1,2,3,4,1,5,4,3];
var names = ["Amy", "Beth", "Chad", "Doug", "Ed"];

function calculateCoffeeSize(sizeParameter){
    if(sizeParameter === "small") {
       let filteredCoffeeArray =  ml.filter(size => size >= 200 && size < 300);
       console.log("There are " + filteredCoffeeArray.length + "of a " + sizeParameter + "size.");
    } else if(sizeParameter === "medium") {
        let filteredCoffeeArray = ml.filter(size => size >= 300 && size < 400);
        console.log("There are " + filteredCoffeeArray.length + "of a " + sizeParameter + "size.");
    } else if(sizeParameter === "large") {
        let filteredCoffeeArray = ml.filter(size => size >= 400 && size < 500);
        console.log("There are " + filteredCoffeeArray.length + "of a " + sizeParameter + "size.");
    } else if(sizeParameter === "xl") {
        let filteredCoffeeArray = ml.filter(size => size >= 500);
        console.log("There are " + filteredCoffeeArray.length + "of an " + sizeParameter + "size.");
    } else {
        console.log("Invalid size passed in. Please try again.");
    }
}

// calculateNumberOfCoffeesForASize("medium");

function calc(ml){
    var small = 0; 
    var medium = 0; 
    var large = 0; 
    var xl = 0;

    for(var i = 0; i< ml.length; i++){
        if(ml[i] >= 200 && ml[i] < 300){
            small++;    
        } else if(ml[i] >= 300 && ml[i] < 400){
            medium++;
        } else if(ml[i] >= 400 && ml[i] < 500){
            large++;
        } else if(ml[i] >= 500){
            xl++;
        }
    }
    console.log("The amount of coffees for each size were: " + "SMALL: " + small + " MEDIUM: " + medium + " LARGE: " + large + " XL: " + xl);
}

calc(ml);

function employeeCalculation(ids){
    var amy = 0;
    var beth = 0;
    var chad = 0;
    var doug = 0;
    var ed = 0;
    for(var i = 0; i<ids.length; i++){
        if(ids[i] == 1) {
            amy++;
        } else if(ids[i] == 2){
            beth++;
        } else if(ids[i] == 3){
            chad++;
        } else if(ids[i] == 4){
            doug++;
        } else if(ids[i] == 5){
            ed++;
        } else {
            console.log('Number not valid');
        }
    }
    
    console.log("Amy: " + amy + " Beth: " + beth + " Chad: " + chad
    + " Doug: " + doug + " :Ed " + ed);
}

employeeCalculation(ids);