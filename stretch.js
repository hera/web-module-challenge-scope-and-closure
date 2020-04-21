
/*1. Predict the output of the code below and explain why this is the output using what you learned today.
When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

    
    (function(){
      var a = b = 3;
    })();
    console.log("a defined? " + (typeof a !== 'undefined'));
    console.log("b defined? " + (typeof b !== 'undefined'));

*/

    /*
    This is an immidiately invoked function expression.
    The function creates an environment for variables.
    The assignment operator on the right is executed.
    Javascript tries to assign the value 3 to the variable 'b', which doesn't exist in the local scope.
    So it tries to find in the outer (global) scope.
    There's no such variable, so Javascript automatically creates the variable there and sets the value to 3;
    Assign the value of b to a.
    b is in global scope, 'a' is local to function.
    I can't reach 'a' from the global scope, so it's undefined. But 'b' is still there.

    */

/*  
    2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen
    before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).
    
    ```js
    var addSix = createBase(6);
    addSix(10); // returns 16
    addSix(21); // returns 27
    ```
*/

function createBase(num) {
    return function(n) {
        return num + n;
    }
}

var addSix = createBase(6);
console.log(addSix(10)); // 16
console.log(addSix(21)); // 27




/*    
    3. Research the differences between functional programming and object oriented programming. Then, describe the pros
    and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!
*/