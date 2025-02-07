// 2. create a three dimensional array of your own choice (array-in array-in array).

let array = []
let num = 1;

for(let i=0;i<3;i++){
    array[i] = []
    for(let j=0;j<3;j++){
        array[i][j] = []
        for(let k=0;k<3;k++){
            array[i][j][k] = num;
            num++;
        }
    }
}

console.log(array);