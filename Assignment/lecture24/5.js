// Create an arrow function which takes one argument as price and calculates the GST of the item, if the total is more than 1000 then there will be no shipping charge to the items, if the total is more than 500 then shipping charge will be 50 and if the total is less than 5000 then shipping charge will be 100

let shipping_charge = (price)=> {
    if(price>1000){
        return 0;
    }
    else if(price>500){
        return 50;
    }
    else {
        return 100;
    }
}

console.log("shipping charge for the item is: ",shipping_charge(501));