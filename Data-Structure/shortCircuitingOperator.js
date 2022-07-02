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
  };

  const guest1 = restaurant.numGuest ? restaurant.numGuest : 15;
  console.log(guest1);

  //by naulishing operator

  const guest2 = restaurant.numGuest||15;
  console.log(guest2);

 