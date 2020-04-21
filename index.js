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
 * 
 * In the first case there's a closure. In the second, function changes the value of 'count' in the global scope.
 * 
 * counterMaker function creates an environment and stores 'count' variable in it. Then it creates a new function 'counter' and returns it.
 * The value is stored in counter1 variable. When the value of counter1 is invoked, the function will have access to the previously created
 * environment, where 'count' variable exists, and increment the number.
 * 
 * counter2 function will just change the value of 'count' in the global scope and counter2's environment will be garbage collected.
 * 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * In counterMaker. count variable is not reachable from the global scope. The only way to access it is to use counter function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1 is good when I need to hide the details and not clutter the global scope.
 * counter2 will work when I need to change the value in the global scope
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
    return Math.floor(Math.random() * 3);
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

function finalScore(inning, quantity){
    const score = {
        "Home": 0,
        "Away": 0
    }

    for (let i = 0; i < quantity; i++) {
        score.Home += inning();
        score.Away += inning();
    }

    return score;
}

// console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

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

function getInningScore(inningCb) {
    return inningCb();
}

function scoreboard(getInningScoreCb, inningCb, quantity) {
    const score = {
        "Home": 0,
        "Away": 0
    }

    for (let i = 0; i < quantity; i++) {
        let inningScoreHome = getInningScoreCb(inningCb);
        let inningScoreAway = getInningScoreCb(inningCb);

        score.Home += inningScoreHome;
        score.Away += inningScoreAway;
        console.log(`Inning #${i + 1}: ${inningScoreAway} - ${inningScoreHome}`);
    }

    console.log(`Final Score: ${score.Away} - ${score.Home}`);
}

scoreboard(getInningScore, inning, 9);


