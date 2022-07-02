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
    },
    //rest pattern example.......
    orderPizza(mainIngridient,...otherIngridient){
        console.log(`your pasta is made by main Ingridient is ${mainIngridient} and other ingridients are ${otherIngridient}`)

    }
  }
//sts will give us unique values.. it will not return any duplicate values
const orderSet = new Set([
    'pasta','pizza','tomato','rizotto','pasta','pizza','tomato','rizotto'
]);
console.log(orderSet);

console.log(new Set("tanmoy"));

console.log(orderSet.has('pizza'));

console.log(orderSet.size);

orderSet.add("chilli");

orderSet.add("chilli");

console.log(orderSet);

orderSet.delete("tomato");

console.log(orderSet);

//in sets there is no indexs .. there is no way getting out values from sets..we dont need it..
//because all values are unique..if we need we should use array.


// orderSet.clear()
// console.log(orderSet);

 //as sets are itterables therefore we can loop over them

 for (const order of orderSet)
 console.log(order);

//  we can convert array to set if we want to retrive the unique values....
//we can pass array because array is itterable
const item =  ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad','Focaccia', 'Bruschetta', 'Garlic Bread',]
const uniqueItem = new Set(item)
console.log(uniqueItem)

//we can put back into an array using spread operator
const uniqueItems = [...new Set(item)]
console.log(uniqueItems)

//
console.log(
    new Set (['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad','Focaccia', 'Bruschetta', 'Garlic Bread',
]).size
);




    


