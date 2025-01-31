// Create a loop which gives the following output - 
//             1,1,1 
//              1,1,2
//              1,1,3
//               1,2,1
//               1,2,2
//               1,2,3

for(var i=1;i<2;i++){
    for(var j=1;j<=2;j++){
        for(var k=1;k<=3;k++){
            console.log(1,",",j,",",k)
        }       
    }
}