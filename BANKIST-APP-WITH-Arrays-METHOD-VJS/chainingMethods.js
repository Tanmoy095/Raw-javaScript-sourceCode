
const movements= [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.2;

const totalDepositInUsd = movements
.filter(mov =>mov>0)
.map(deposit=>deposit*euroToUSD)
.reduce((acc,dep)=>acc+dep,0);

console.log(totalDepositInUsd);
