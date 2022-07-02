"use strict";

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours:{
    thu:{
      open:12,
      close:22,
    },
    friday:{
      open:2,
      close:20
    },
    saturday:{
      open:0,
      close:24,//24 hours open
    }
  },
//method
  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]

  },
  //instead of defining perameter manually we can just pass an object as an argument ,function then 
  //immidiately destructure that object..
  //we only pass 1 object as an 1 argument.. we did not pass 4 argument..also we can assign default values

  orderDelivery:function ({time=20.00,starterIndex,mainIndex,address="dhaka",deliveryCost=50}) {
      console.log(`Order will be delivered! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered at ${address} at ${time}pm ,and you have to pay delivery cost ${deliveryCost} taka`);
      
  }
}
//we can pass the value for the mathod

restaurant.orderDelivery({
    time:12,
    starterIndex:2,
    mainIndex:2,
    address:"chittagong"
})
//here address and time is not defined but it will resive the default value. if its declred the default value will not apply
restaurant.orderDelivery({
    starterIndex:1,
    mainIndex:0,
})

/*in object the order of the elements does not matter..
if we want to destructure object then we just have to write the property name in curly braces then 
eqal then object name..
example..
*/
const {name,openingHours,categories}=restaurant;
console.log(name,openingHours,categories);

/* giving new variable name..
if we want to give new variable name then first we have to declare exact name then colon then 
new variable name ..then log the new variable name*/

const{
    name:restaurantName,
    openingHours:hour,
    categories:tag
} = restaurant;

console.log(restaurantName,hour,tag);

/*set default value ..
setting deafault value is very very important for api call or 3rd party data 
we can assign default value which doesnt exist in restaurent object , but if exist default value will not 
apply*/

const{
    menu="default value does not exist in obj",
    starterMenu:starter=[]
} = restaurant
console.log(menu,starter);

//mutating variables
let a=2;
let b = 4;

const obj={a:23,b:44,c:99}
//( {a,b} = obj );
console.log(a,b);

//nested object
//here we destrucuring the nested obj .. we can get the value of friday opening and close hour .we can also define a new variable name
const {
    friday:{open:o,close:c}
}= openingHours;
console.log(o,c);



