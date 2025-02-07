// 2. Create an array of 40 elements named as array_forty
// a) Print array_forty with its length
// b) Create a new array named as chotu_array which stores only the element of array_forty
// which are even
// c) Print chotu_array and its length

let array_forty = [];
let num=1;

for(let i=0;i<40;i++){
    array_forty[i] = num;
    num++;
}

// a) Print array_forty with its length
console.log(array_forty);
console.log("Length of array_forty:", array_forty.length);

// b) Create a new array named as chotu_array which stores only the element of array_forty
// which are even

let chotu_array = array_forty.filter((el,index)=>{
    if(el%2==0){
        return el;
    }
})

// c) Print chotu_array and its length
console.log(chotu_array);
console.log("Length of chotu_array:",chotu_array.length);