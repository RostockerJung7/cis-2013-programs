/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
intMin = parseInt(prompt("Please, choose your lowest number which is not below zero in your guessing range."));
while (isNaN(intMin) || intMin < 0) // While loop to make sure the input meets the criteria.
{
    intMin = parseInt(prompt("I am sorry your number is not a number or below zero. \n " + " Please, choose another number which meet the criteria."));
}
document.write("Lowest number = " + intMin);






/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/
intMax = parseInt(prompt("Please, choose your highest number which is at least 2 higher than your lowest number."));
while (isNaN(intMax) || intMax < intMin+2) // While loop to make sure the input meets the criteria. The highest number has to the 2 more than the lowest number.
{
    intMax = parseInt(prompt("I am sorry your number is not 2 higher than your lowest number. \n " + " Please, choose another number which meet the criteria."));
}
document.write(" Highest number = " + intMax); 



/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin); 

// set the loop counter
intCount = 1; //It will count the attempts.


/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/
intGuess = parseInt(prompt("Please, choose your guess which has to be between your lowest and highest number."));
while (isNaN(intGuess) || intGuess < intMin || intGuess > intMax) // While loop to make sure the input meets the criteria. The guessing number has to be between the highest and the lowest number.
{
    intGuess = parseInt(prompt("I am sorry your number is not in the range between the lowest and highest number. \n " + " Please, choose another number which meet the criteria.")); //prompt if doesn't meet the citeria
} 



/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

while (intGuess != intRandom) //while loop to play the game. It counts the wrong guesses and tells the player if the guess was too low or too high
{
    if (intGuess < intRandom)
    {
        intGuess = parseInt(prompt("Guess is too low .Give it another guess"));
    }
    else
    {
        intGuess = parseInt(prompt("Guess is too high. Give it another guess"));
    }
intCount++;
}

 
 
 
 
 
 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");