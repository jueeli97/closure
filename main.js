// CLOSURE

function demo(){

    let method1 = function(numValue1, numValue2){
        return numValue1 + numValue2;
    }

    
    
    // If you return method then its closure.
    return method1;
}

// let demoObj = new demo();
// demoObj.method(); // private method cant be accessed outside scope 

 let methodObj= new demo();
 let result = methodObj(2,2);

 console.log(result);

