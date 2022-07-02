const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1;

// const movementUSD = movements.map(function(mov){
//   return mov*euroToUSD;
// })
// console.log(movementUSD);

// we can do it another way..but functional programming is best
// const movementUSDFor=[];
// for(const mov of movements)
// movementUSDFor.push(mov*euroToUSD);
// console.log(movementUSDFor);

//

const movementUSD = movements.map(mov=>
   mov * euroToUSD
);
console.log(movementUSD);


// movements.forEach((mov,i,array) => {
//      mov>0?console.log(`${i+1}:You deposit:${mov}`):console.log(`${i+1}:You withdraw:${mov}`);
    
//  });

const newd=  movements.map((move,i,arr)=>
    `movement:${i+1}: You ${move>0? "You deposited " :"withdraw"} ${Math.abs(move)} `

 );

console.log(newd);
