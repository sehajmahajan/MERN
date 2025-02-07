// Create an array named country having 5 countries name in it and perform following operation:
// ->Print the entire array and its length
// ->Print the country at position 3
// ->Remove first country
// ->Add a new country in the end
// ->Traverse the array

let country = ["India","USA","Canada","Australia","United Kingdom"]

// ->Print the entire array and its length
console.log("Entire array:",country);
console.log("Length of array:",country.length);

// ->Print the country at position 3
console.log("country at position 3:",country[2]);

// ->Remove first country
console.log("first country removed:",country.shift());

// ->Add a new country in the end
console.log("new country added at position:",country.push("Finland"));

// ->Traverse the array
for(let i=0;i<country.length;i++){
    console.log(country[i]);
}