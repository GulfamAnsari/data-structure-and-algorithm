//  1. Flatten the below Object
// const OBJECT = { name: "JavaS", empty: {}, roll: 48, address: { house: 213, city: "Delhi", pincodes: [110094, 110049] }}
// // response = { name: "JavaS", address.house: 213, address.city: "Delhi", pincodes.[0]: 110094}, pincodes.[1]: 110049 }
function flattenObject(obj, result = {}, prevKey = "") {
    let objectKeys = Object.keys(obj);
    for (let i = 0; i < objectKeys.length; i++) {
        let key = objectKeys[i];
        let futureKey = prevKey ? `${prevKey}.${key}`: key;
        if (typeof(obj[key]) == "object" && Object.keys(obj[key]).length == 0) {
            result[futureKey] = obj[key];
        } else if (typeof(obj[key]) == "object") {
            flattenObject(obj[key], result, futureKey);
        } else {
            result[futureKey] = obj[key];
        }
    }
    return result;
}


// 2. Design a logger rate limiter
// Design a logger system that receive stream of messages along with its timestamps, 
// each message should be printed if and only if it isnot printed in the last 10 seconds.
let input = [[1, "good morning"], [5, "good morning"], [9, "i need coffee"], [10, "hello world"], [11, "good morning"], [15, "i need coffee"], [17, "hello world"], [25, "i need coffee"]]
class Logger {
    map = new Map();
    response = [];
    constructor(timeLimit) {
        this.timeLimit = timeLimit;
    }

    print = (time, message) => {
        // Implementation goes here
        if (this.map.has(message) && time - this.map.get(message) < this.timeLimit) {
            this.response.push(false);
        } else {
            this.map.set(message, time);
            this.response.push(true);
        }
    }
}

// 3. Develope a file/folder menu just like VS code.
// Trick: You have to use the event bubbling to cancle the events bubble at child div
