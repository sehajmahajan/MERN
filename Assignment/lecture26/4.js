// Create an array named numbers containing 50 numbers. Then, create a smaller array that includes all the numbers from the numbers array that are divisible by three.

let numbers = [];

for(let i=0;i<50;i++){
    numbers[i] = i+1;
}

console.log(numbers);

let another_array = [];

for(let i=0;i<numbers.length;i++){
    if(numbers[i]%3==0){
        another_array.push(numbers[i]);
    }
}

console.log(another_array)