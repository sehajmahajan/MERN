// Create an array named i_am_array of 20 elements,
// a) Print i_am_array
// b) Print each element of i_am_array
// c) Create a new array named teen_guna which stores each element of i_am_array multiplied
// by 3
// d) Print teen_guna array
// e) Print the total length of teen_guna array
// f) Print the type of teen_guna array as well as i_am_array

let i_am_array = [];

// Create an array named i_am_array of 20 elements
for(let i=0;i<20;i++){
    i_am_array[i] = i+1;
}

// a) Print i_am_array
console.log(i_am_array)

// b) Print each element of i_am_array
for(let i=0;i<20;i++){
    console.log(i_am_array[i]);
}

// c) Create a new array named teen_guna which stores each element of i_am_array multiplied
// by 3

let teen_guna = []

for(let i=0;i<i_am_array.length;i++){
    teen_guna[i] = i_am_array[i]*3;
}

// d) Print teen_guna array
console.log(teen_guna);

// e) Print the total length of teen_guna array
console.log("lenght of teen_guna aray:",teen_guna.length);

// f) Print the type of teen_guna array as well as i_am_array
console.log("type of i_am_array is:",typeof(i_am_array));
console.log("type of teen_guna array is:",typeof(teen_guna));