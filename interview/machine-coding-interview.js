//  1. Flatten the below Object
// const OBJECT = { name: "JavaS", empty: {}, roll: 48, address: { house: 213, city: "Delhi", pincodes: [110094, 110049] }}
// // response = { name: "JavaS", address.house: 213, address.city: "Delhi", pincodes.[0]: 110094}, pincodes.[1]: 110049 }
function flattenObject(obj, result = {}, prevKey = "") {
    let objectKeys = Object.keys(obj);
    for (let i = 0; i < objectKeys.length; i++) {
        let key = objectKeys[i];
        let futureKey = prevKey ? `${prevKey}.${key}` : key;
        if (typeof (obj[key]) == "object" && Object.keys(obj[key]).length == 0) {
            result[futureKey] = obj[key];
        } else if (typeof (obj[key]) == "object") {
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

// 3. Design a machine that takes a task with time(time taken by the task) and exicute it whenver the machine is free.
// It will also take concorrentTask which tells how many tasks can be run at same time.
class Machine {
    constructor(concorrentTask) {
        this.concorrentTask = concorrentTask;
        this.taskQuequ = [];
        this.runningTask = 0;
    }

    /* task: Function, timeTakenByTask: Number*/
    addTask = (task, timeTakenByTask) => {
        this.taskQuequ.push({ task, time: timeTakenByTask });
        if (this.runningTask < this.concorrentTask) this.exicuteTask();
    }

    exicuteTask = () => {
        if (this.taskQuequ.length) {
            this.runningTask = this.runningTask + 1;
            let ele = this.taskQuequ.shift();
            setTimeout(() => {
                ele.task();
                this.runningTask = this.runningTask - 1;
                this.exicuteTask();
            }, ele.time);
        }
    }
}

// 4. UUUU
function getNameById(id, callback, index) {
    // simulating async request
    const randomRequestTime = Math.floor(Math.random() * 100) + 200;

    setTimeout(() => {
        callback("User" + id, index)
    }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
    // implement here
    let result = [];
    let index = 0;
    print([...inputs]);
    function print(queque) {
        while (limit > 0 && queque.length) {
            let ele = queque.shift();
            limit--;
            iterateeFn(ele, (data, i) => {
                limit++;
                result[i] = data;
                if (inputs.length === result.length) callback(result);
                else print(queque);
            }, index++);
        }
    }
}

mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
    console.log(allResults) // ["User1", "User2", "User3", "User4", "User5"]
})


///****** 5. Create a fetch method wrapper which can handle parrallen request calls without making same requests
// if data is already present in the cache and not expired also */
// Requirements
// 1. send the cache data if data is present
// 2. if data is not present then make an API call
// 2. Add TTL - 1 hour(with same configuration)

// Question: Can i make this using callback ?
const URL = `https://random-data-api.com/api/users/random_user`;

class Obserable {
    constructor() {
        this.observer = [];
        this.cache = {};
        this.ttl = 60 * 1000; // 1 hour ttl
    }

    subscribe = (fun, url) => {
        this.observer.push({ exicuted: false, fun });
        this.fetchWrapper(url).then((data) => {
            if (this.cache[url] && this.cache[url].status == "completed" && new Date() - this.cache[url].start_time < this.ttl) {
                this.notify(this.cache[url]);
            } else if (!this.cache[url] && new Date() - this.cache[url].start_time > this.ttl) {
                 this.notify(data);
            }
        });
    }

    notify = (val) => {
        this.observer.forEach((va, index) => {
            if (!va.exicuted) va.fun(val);
            this.observer[index].exicuted = true;
        })
    }

    fetchWrapper = async (url) => {
        if (!this.cache[url] || new Date() - this.cache[url].start_time > this.ttl) {
             this.cache[url] = { status: "pending", start_time: new Date() };
            return fetch(url).then((res) => {
                return res.json();
            }).then((data) => {
                this.cache[url] = { status: "completed", start_time: new Date(),  data };
                return data;
            });   
        } else if (this.cache[url]) {
            return null;
        }
    }
}

let obs = new Obserable();
let s = new Date();
obs.subscribe((v) => { console.log(v, new Date(v.start_time) - s) }, URL);
obs.subscribe((v) => { console.log(v) }, URL);
setTimeout(() => {
    obs.subscribe((v) => { console.log(v) }, URL);
}, 3000)


///*** 6. Rate limiting */
// to prevent Dos attack, we have to limit the number of API calls so that other  authentic users
// can also use the service and the system will not break.
function mockAPI(starttime, apiName) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ timeTake: new Date() - starttime, apiName });
        }, Math.random() * 2000);
    });
}

class RateLimiter {
    constructor(noOfAPIsCalls, timeLimit) {
        this.noOfAPIsCalls = noOfAPIsCalls;
        this.timeLimit = timeLimit;
        this.map = {};
    }

    isAllowed = (clientId, apiName) => {
        if (!this.map[clientId]) this.map[clientId] = [];

        const apiCallinfo = { time: new Date() };
        const istimeReached = this.map[clientId].length && (apiCallinfo.time - this.map[clientId][0].time) > this.timeLimit;
        const isLimitReached = this.map[clientId].length && this.map[clientId].length == this.noOfAPIsCalls;
        if (istimeReached || isLimitReached) {
            if (isLimitReached) {
                console.log(`Limit reached because ${this.map[clientId].length} API are in process`);
            } else {
                console.log(`Limit reached because  you made ${this.map[clientId].length} API calls in ${(apiCallinfo.time - this.map[clientId][0].time)}s`);
            }
        } else {
            this.map[clientId].push(apiCallinfo);
            setTimeout(() => {
                this.map[clientId].shift();
            }, this.timeLimit);
            mockAPI(new Date(), apiName).then((data) => {
                console.log(data);
            });
        }
    }
}

const clientId = 123;
const rate = new RateLimiter(10, 1000);
for (let i = 1; i <= 20; i++) {
    setTimeout(() => {
        rate.isAllowed(clientId, `API-${i}`);
    }, i * 500);
}




// 7.  1000 promise object - running in a batch of 5
// // t0 = p1, p2, p3, p4, p5; (p1, p3 - resolved)
// // t1 = p2, p4, p5, p6, p7; (p7)
// // t2 = p2, p4, p5, p6, p8; (p2, p5)



let promises = [];
for (let i = 0; i < 10; i++) {
    // promises.push(Promise.resolve(i));
    promises.push(createPromise(i));
}

function createPromise(i) {
    return new Promise((res) => {
        let ran =  Math.floor(Math.random() * 5000);
        setTimeout(() => {
            res(i);
        }, ran);
    })
}


const batchLength = 5;
let queque = promises.splice(0, batchLength);

let runningPromises = [];
function runBatch() {
    while (queque.length) {
        let ele = queque.pop();
        runningPromises.push(ele);
        ele.then((data) => {
            console.log(data)
            runningPromises.pop();
            if (promises.length) {
                queque.push(promises.pop());
                runBatch();
            }
        });
    }
    console.log('Curretly running promises', runningPromises.length);
}
runBatch();
