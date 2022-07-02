'use strict';
// document.querySelector(".message").textContent="🔥Correct Number!"
// document.querySelector(".number").textContent=13;
// document.querySelector(".score").textContent=10;
// document.querySelector(".guess").value=23;

const number=Math.trunc(Math.random()*20+1);
let score=20;
let highestScore=0;
document.querySelector(".number").textContent=number;

document.querySelector(".check").addEventListener
("click",function(){
    const guess=Number(document.querySelector(".guess").value);
    console.log(typeof guess);
    if(!guess){
      document.querySelector(".message").textContent="❌ No number!"
      
    }else if (guess>number) {
        if (score>1) {
            document.querySelector(".message").textContent="📈 Number is too high" ;
            score--;
            document.querySelector(".score").textContent=score;           
        }else{
            document.querySelector(".message").textContent="🧨 You lost the game " ;
            document.querySelector(".score").textContent=0;           
        }
        
    }else if (guess<number) {
        if (score>1) {
            document.querySelector(".message").textContent="📉 Number is too low!"
            score--;
            document.querySelector(".score").textContent=score;
        }else{
            document.querySelector(".message").textContent="🧨 You lost the game " ;
            document.querySelector(".score").textContent=0;  
        }    
        
    }else if (guess==number) {
      document.querySelector(".message").textContent="🔥 Correct Number!"
      //highestScore =[" "];
      if (score>highestScore) {
          highestScore=score;
          document.querySelector(".highscore").textContent=highestScore;
          
      }
      highestScore=score;
    }
});

document.querySelector(".again").addEventListener
("click",function () {
document.querySelector(".message").textContent="Start guessing..."
document.querySelector(".score").textContent=20;
document.querySelector(".number").textContent="?";
document.querySelector(".guess").value="";




   
    
})


//document.querySelector(".message").textContent="Correct Number!"