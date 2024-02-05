let num = prompt("Enter any number!"); //we are taking input from ther user any random number.

let ran = Math.floor(Math.random()*num) + 1;  // math function is generating any random number between 1 to 100.

let guess = prompt("Guess the random number");   //taking guess from the user to match with the random generated number.

while(true){                                //starting a loop while will be always running.
    if(guess == "quit"){                    //if the user press "quit", the program will stop.
        console.log("Quitting The APP");
        break;                              //break in used to terminate and move the operation outside the loop.
    }

    if(guess > ran){                        //checking whether the guessed number is greater than random number.
        guess = prompt("Your guess is HIGHER than the generated number, guess LOWER value.");
    }else if(guess < ran){          //checking whether the guessed number is lower than random number.
        guess = prompt("Your guess is LOWER than the generated number, guess HIGHER value.");
    }else if(guess == ran){         //checking whether the guessed number is equals to random number.
        console.log("Congrats! Your guess is right, Random number is: ", ran);
        break;                  //breaking the operating to move outside the loop.
    }else{
        guess = prompt("Your entered wrong value, please enter any number value"); //prompt 
    }
}