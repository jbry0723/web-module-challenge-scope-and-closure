// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  A:counter1 will always =0 because the count variable is only inside the scope of counterMaker. counter2 will add 1 for each time the function is run because the data is "saved" in the global scope
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *  A:Counter 2 because the variable is defined outside the function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  A. Counter1 would be perferable if you wanted to reset the count each time the function is run (perhaps add some more code that acts on it to get an outcome based off a user-defined value). Counter2 is perferable when you want the counter to store data over multiple iterations.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(/*Code Here*/){

let points=(Math.floor(Math.random()*Math.floor (3)))
return points

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 


function finalScore(callback,n){
  let hscore=0
  let ascore=0
for(i=0; i<n; i++){
hscore=callback()+hscore
ascore=callback()+ascore
 }
 fscore={home:hscore, away:ascore}
return fscore

}
  
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(scoreCallback,inningCallback, n){
  let awayTeam=0
  let homeTeam=0
  for(i=0; i<n; i++){
    scoreCallback(inningCallback)
    awayTeam=scoreCallback(inningCallback)+awayTeam
    homeTeam=scoreCallback(inningCallback)+homeTeam
    console.log(`${i+1} inning ${awayTeam} - ${homeTeam}`)
    }
    
  }
  scoreboard(getInningScore, inning, 10)

function getInningScore(callback){
  return callback()
 }
 
 scoreboard(getInningScore, inning, 5)