const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits= movements.filter(function(mov){
//     return mov>0;
// })
const deposits = movements.filter(
    mov => mov>0
);
console.log(movements);
console.log(deposits);

//we can do it another way 
const depositFor=[];
for (const move of movements){
    if (move>0) {
        depositFor.push(move);
        
    }
}
console.log(depositFor);

//for withdrew....
const withdrawls = movements.filter(
    mov => mov<0
);
console.log(withdrawls);