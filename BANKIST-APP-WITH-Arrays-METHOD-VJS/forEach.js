const movements = [11,-11,-444,500,1000,-300,-200,900,1000,20000,-550,400];

for (const [i,movement] of movements.entries()){
    if (movement>0) {
        console.log(`you deposit ${i+1}:${movement}`);
        
    }else{
    console.log(`you withdraw ${i+1}:${movement} `);
    };

};
console.log(`----for each-------`);
//we can do the same thing with another way..with for each method
movements.forEach(function(mov,i,array){
    if (mov>0) {
        console.log(`you deposit ${i+1}:${mov}`);
        
    }else{
    console.log(`you withdraw ${i+1}:${Math.abs(mov)}`);
    };

})