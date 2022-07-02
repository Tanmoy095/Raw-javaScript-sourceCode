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
  //while spread  operator are used for unpack an array rest is to pack element into an array


//spread because on right side on assignment operator =

const arr  = [1,2,3,...[4,5,6]]
console.log(arr); 


//rest  because on left side on assignment operator =    ... here othrs is called rest because 
//it will take rest or remaining elements of the array 
//then put them into a new array
//The rest parameter must be the last parameter in the function definition.

const [a,b,...others]= [2,3,4,5,6,7];
console.log(a,b,others);

const [pizza,rissoto,...otherFoods]=[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,rissoto,otherFoods);


//main ingridients will be chicken and other will others
restaurant.orderPizza("Chicken","Chilli","onoin","mutton","bread");

//function
//here rest operator will take all the elements we call
const add = function (...numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) 
        sum +=numbers[index]
        console.log(sum);
       
}
add(4,5,6);
add(1,2,3);
add(1,2,3,4,5,6,7,8,9,0);

const x =[1,2,3,4,5,6,7,8,9,];
add(...x)