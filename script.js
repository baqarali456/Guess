const submit = document.getElementById('subt');
const input = document.getElementById('guessField');
const PreviousGuesses = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('resultParas');
const newGame = document.querySelector('.new-Game');


let values = [];
let playgame = true;
let totalguess = 10;
let str = "";

// playgame

if(playgame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
       let guess = input.value;
       guess = parseInt(guess); 
       validate(guess);
    })
}

// validate

function validate(guess){
  if(isNaN(guess)){
    alert("Please Enter Number")
  }
  else if(guess < 1 || guess > 100){
   alert("Please Enter between 1 & 100 ")
  }
  else{
    if(guess){
        values.push(guess);
        checkGuesses(guess)
        message(guess)
    }
    else{
        checkGuesses(guess)
        message(guess)
    }
  }
}

// check guesses
function checkGuesses(guess){
  if(guess <= 50){
    lowOrHi.innerHTML = "Your guess is too low"
  }
 else if(guess > 51 && guess < 70){
    lowOrHi.innerHTML = "Your guess is high"
  }
 else if(guess > 80){
    lowOrHi.innerHTML = "Your guess is too high"
  }
  else{
    lowOrHi.innerHTML = "Your guess is Right"
  }
}

// message guess

function message(guess){
   PreviousGuesses.innerHTML = `${values}` ;
   for(i=0;i<values.length;i++){
       remainingGuess.innerHTML = `${totalguess - i}`
   }
   input.value = "";
   if(remainingGuess.innerHTML === "0"){
    end()
   }
   
}

// start 

function start(){
    playgame = true;
    submit.disabled = false;
    values = [];
    PreviousGuesses.innerHTML = "";
    remainingGuess.innerHTML = "10"
}

// end 

function end(){
    submit.disabled = true;
    playgame = false;
    newGame.addEventListener('click',start)
}



