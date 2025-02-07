// Create a function with rest parameter and print traverse each element present in the argument

function print(...element){
    for(let i=0;i<element.length;i++){
        console.log(element[i]);
    }
}

print("sehaj","varun","abhay","sid");