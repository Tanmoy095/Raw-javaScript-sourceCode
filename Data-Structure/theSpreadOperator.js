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
      
  },
  orderPasta:function (ingridients1,ingridients2,ingridients3){
    console.log(`Here is your pasta with ${ingridients1},${ingridients2},${ingridients3}`);

  }
}

//spread operator takes all the element of an array also doesnt create new variable

const arr=[1,2,3];
const newArray=[4,5,6,arr[0],arr[1],arr[2]];
console.log(newArray);

//but we can do it easyly with spread operator
const newArray2=[4,5,6,...arr] 
console.log(newArray2); 

//shallow copies of array..

const newArr = [...restaurant.starterMenu ]
console.log(newArr);

//marge two array together

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu);
//spread operator can work on all itterable .
//ITTERABLE:arrays,strings,maps,sets,,but not object

const me =  'tanmoy'
const latters = [...me,"","d"]
console.log(latters);

//we can use spread operator when we pass values into function
console.log("t","a","n","m",'o','y');
console.log(...me);

//***this will not work.because this is not a place that expects
//multiple values separated by a comma are usually only expected when we pass an arguments into a function or a new array
//console.log(`${...me}`);

const ingridients=[prompt("pasta with ingridients 1"),prompt("ingridients2"),prompt("ingridients3")]
console.log(ingridients);
//we can use spreadOperator as an argument pass in a function.. 
restaurant.orderPasta(...ingridients)
//old way
restaurant.orderPasta(ingridients[0],ingridients[1],ingridients[2])


//spread operator also works on objects
const newRestaurent = {foundedIn:1998,...restaurant,founder:"tanmoy"}
console.log(newRestaurent);
//instead of Object.assign we can shallow copy of objects with spread Operator
const copyOfRestaurent = {...restaurant};
copyOfRestaurent.name = "Copy of Restaurent"
//copied objects name
console.log(copyOfRestaurent.name);

//original resturant object name
console.log(restaurant.name);