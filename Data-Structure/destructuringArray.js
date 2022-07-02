"use strict";

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]

  }
}
//whenevr js sees an array in left side of the equal symbol it knows that we will unpacking the arrays.
//but original arrays will not affect it. 
const arr =[2,3,4]
const a = arr[0];
const b = arr[1];
const c = arr[2];
const[x,y,z] = arr;
console.log(x,y,z);
console.log(a,b,c);

//if we want to unpack 1st and 4th elements of an array 

const [first,,,fourth] = restaurant.categories
console.log(first,fourth);

//for change the primary and secondary item 
let [main, ,secondary]= restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary= temp;
// console.log(main, secondary);


//for change the primary and secondary item ..
//***with destructuring arrays.*****very very  simple
//switching variables

[main,secondary] = [secondary,main];
console.log(main, secondary);


//recive 2 return value from a function ...
const[starter,mainI]=restaurant.order(1,2);
console.log(starter,mainI);


//nested array destructuring

const nested = [2,4,[5,7]];
const[i,j,[k,l]]=nested;
console.log(i,j,k,l);

//Default values
//const[p,q,r]= [12,13]

const[p=15,q=15,r=15]= [,12,13];
console.log(p,q,r);

