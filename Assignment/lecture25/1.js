// Create a function which takes one argument and prints its table For E.g 2*1=2, 2*2=4...
function table(num) {
    for(var k=1;k<=10;k++){
        console.log(num, "*", k, "=", num*k)
    }
}

table(5);