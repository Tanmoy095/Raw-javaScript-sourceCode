const weekDays = ["friday","saturday","monday"];
const openingHours={
  [weekDays[0]]:{
    open:12,
    close:22,
  },
  [weekDays[1]]:{
    open:2,
    close:20
  },
  [weekDays[2]]:{
    open:0,
    close:24//24 hours open
  },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //method
    order:function(starterIndex,mainIndex){
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  
    },
    //we can simply add the object here.
    openingHours,
    //instead of defining perameter manually we can just pass an object as an argument ,function then 
    //immidiately destructure that object..
    //we only pass 1 object as an 1 argument.. we did not pass 4 argument..also we can assign default values
  
    orderDelivery({time=20.00,starterIndex,mainIndex,address="dhaka",deliveryCost=50}) {
  
        console.log(`Order will be delivered! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
        will be delivered at ${address} at ${time}pm ,and you have to pay delivery cost ${deliveryCost} taka`);
        
    },
    orderPasta(ingridients1,ingridients2,ingridients3){
      console.log(`Here is your pasta with ${ingridients1},${ingridients2},${ingridients3}`);  
    },
    //rest pattern example.......
    orderPizza(mainIngridient,...otherIngridient){
        console.log(`your pasta is made by main Ingridient is ${mainIngridient} and other ingridients are ${otherIngridient}`)

    }
  };
if(restaurant.openingHours&&restaurant.openingHours.monday){
    console.log(restaurant.openingHours.monday.open);

}
//with optional chaining we will not get any err messege .. if this is not exist then it will return us undefined
//we cheak the properties exist or not with optional chaining....
//with optional chaining
console.log(restaurant.openingHours.sunday?.close);
 //example...
const days = ["friday","sunday","tuesday","wednesday","saturday","monday"];
for(const day of days){
    const open = restaurant.openingHours[day]?.open??"close"

    console.log(`On ${day} we open at ${open}`);
}

//METHODS 
console.log(restaurant.order?.(0,1) ?? "does not exist");
console.log(restaurant.orderMenu?.(0,1) ?? "Method  does not exist");

//Arrays
const users =[
    {
        name:"tanmoy",
        mobile:010101010
    }
] 

console.log(users[0]?.mobile??"User array empty");




