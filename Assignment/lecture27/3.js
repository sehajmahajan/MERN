// create an object of food items having 2 keys: veg & non_veg. the 'veg' key contains again an object with the keys 'w' for wheat and 'c' for cheese, whereas 'non_veg' key contains an object having keys 'ck' for chicken kabaab and 'ec' for egg curry.
// (a) write syntax for printing cheese.

let food_items = {
    veg: {
        w:"wheat",
        c:"cheese"
    },
    non_veg: {
        ck:"chicken kabaab",
        ec:"egg curry"
    }
}

// (a) write syntax for printing cheese.
console.log(food_items.veg.c)