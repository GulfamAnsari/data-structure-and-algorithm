///////////***************************////////////
// 1. What is closure with an example?
///////////***************************////////////
// Function which remeber its parent lexical scope where it was created forms a clousure
// OR
// Function local varibales bundles with thier lexical scope forms a closure.
// -> Every function in JS are considered as clousure function.
// -> This behaviour implements the data hiding concept as well.
function Counter() {
    let count = 0;
    return function() { // This function will remeber the count variable.
        count++;
        console.log(count);
    }
}
let counter = Counter();
counter();
counter();
counter();


///////////***************************////////////
// 2. What is hoisting?
///////////***************************////////////
// Hoisting is a phenomemon where we can access the variables and functions before its initilization.
// This is happened because JS first created the memory for each of variables and function before any code exicution.
// -> var and function created with function keywords can be accessed with any error.
// -> variables defined with let and const are hoisted to the top of the block as well, but not initialized
// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
// Using a let variable before it is declared will result in a ReferenceError .

///////////***************************////////////
// 3. What is temporal dead zone?
///////////***************************////////////
// Its a time between creation of let and const variables till assignment of its value.
// If you are accessing its value in temporal dead zone, then Js will throw an error. "You can not access varibel before initilization"


///////////***************************////////////
// 4. What is event loop and how it works?
///////////***************************////////////
// 1. Callback stack
// 2. Callback queque / task queque
// 3. Microtask queque
// 4. Event loop
// 5. Web APIs

///////////***************************////////////
// 5. Polyfil for below function or classes?
    // 1. Map
    // 2. Filter
    // 3. Reduce
    // 4. Promise
    // 5. .Call, .Bind, .Apply
    // 6. Promise.all
///////////***************************////////////

///////////***************************////////////
// 6. What is currying? Write a currying function for infinity addition?
///////////***************************////////////
// Currying is an advanced technique of working with functions.
// Currying is a transformation of functions that translates a function
// from callable as f(a, b, c) into callable as f(a)(b)(c)
function sum(a) {
    return function(b) {
        if (b) return sum(a + b);
        else return a;
    };
}

function sum(...args) {
    const s = [...args].reduce((prev, ele) => { return prev + ele });
    return function(...childArgs) {
        if (childArgs.length) return sum(s, ...childArgs);
        return s;
    }
}

console.log(sum(1)(2, 10)(3)(4)());

// 6. What is debouncing and create a debounce function
// Debouncing is a programming pattern or a technique to restrict the calling of a time-consuming function frequently,
//  by delaying the execution of the function until a specified time to avoid unnecessary CPU cycles,
//  and API calls and improve performance.
document.getElementById("input").addEventListener("keypress", (e) => {
    debounce(e.target.value);
});

const debounce = _debounce(function(value) {
    console.log(value);
}, 10);

function _debounce(callback, timeLimit) {
    let timer = null;
    return function(value) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, timeLimit);
    }
}

// 7. What is throattling?
// Throttling implies limiting the number of times a function gets called in a certain time period.
// It will prohibit a function from executing if we have invoked it “recently.”
// Throttling also guarantees that a function runs at a consistent rate.
function buttonclick() {
    let time = 0;
    time++;
    throatleExpression(time);
}

let throatleExpression = throattle((value) => {
    console.log(value);
}, 1000);

function throattle(callback, throattlingTime) {
    let funtionCalled = false;
    return function (value) {
        if (!funtionCalled) {
            funtionCalled = true;
            setTimeout(() => {
                funtionCalled = false;
                callback(value);
            }, throattlingTime);
        }
    }
}

// 8. Event bublling and event capturing/trickling
// Bublling: travle the events from buttom to top(child div to parent div).
// Capturing: travle the events from top to bottom(parent div to child div).


// 9. Event delegation?
// Attaching an event handlers to each child divs are not efficient. so in place of attaching handler at each div, we can
// attach an event handler to parent div so that we can capture all child events using event capturing.

// 10. Web workers?
// Web workers are JS scripts that runs in different thread without interfaring to the main JS thread.

// 11. Service Worker?
// 