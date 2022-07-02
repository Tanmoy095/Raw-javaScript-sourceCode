'use strict';
//if i want to select id then have to use #.....or use getElementById
const score0El=document.querySelector("#score--0");
const score1El=document.getElementById("score--1");
const buttonNew=document.querySelector(".btn--new");
const buttonRoll=document.querySelector(".btn--roll");
const buttonHold=document.querySelector(".btn--hold");

const currentScore0El=document.querySelector("#current--0");
const currentScore1El=document.querySelector("#current--1");

const diceEl=document.querySelector(".dice");

let currentScore=1;

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add("hidden");

//rolling functionality
buttonRoll.addEventListener("click",function(){
    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);

    //display dice.....
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`

    //cheak for rolled 1
    if (dice !== 1) {
        //add dice to current score..
        currentScore+=dice;
        currentScore0El.textContent=currentScore;
    }else{
        //switch to next player

    }
})


