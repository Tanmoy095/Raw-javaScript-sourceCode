//in other method like map forEach thee first argument is current element,index,array,
//but in reduce method 1st argument is accumulator then current el,
//acuumulator has a second para which is initial value
//accumulator -> snowball
const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];
/*

const balance = movements.reduce(function(acc,curr,i,arr){
    console.log(`iteration ${i} accu:${acc}`);
    return acc+curr;

},0);
console.log(balance);
*/


//arraow function

const balance = movements.reduce((acc,curr,i,arr)=>
acc+curr,0);
console.log(balance);

//another way 
let balance2=0;
for (const mov of movements) balance2+=mov;
console.log(balance2);

//MAXIMUM VALUE..
const maximum = movements.reduce((acc,curr)=>{
    if (acc>curr) {
        return acc;
    }else{
        return curr;
    }
},movements[0])

console.log(maximum);