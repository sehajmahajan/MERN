let car={
    car1:{
       name:"thar",
       color:"black" 
    },
    car2:{
        name:"swift",
        color:"white"
    }
}
console.log(car.car1.name);
console.log(car.car2.color);
car.car2.model=2024
console.log(car);

delete car.car1.name
console.log(car);