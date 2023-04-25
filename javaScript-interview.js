// 1. Write a clousure.
// 2. What is hoisting
// 3. What is event loop and how it works?
// 4. Polyfil for below function or classes?
        // 1. Map
        // 2. Filter
        // 3. Reduce
        // 4. Promise
        // 5. .Call, .Bind, .Apply

// 5. What is currying? Write a currying function for infinity addition?
// Currying is an advanced technique of working with functions. 
// Currying is a transformation of functions that translates a function 
// from callable as f(a, b, c) into callable as f(a)(b)(c)
function sum(a) {
    return function(b) {
        if (b) return sum(a + b);
        else return a;
    };
}

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

