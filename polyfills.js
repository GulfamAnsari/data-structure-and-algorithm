/////////**************////////////
//////**** Own Polyfills *****/////
/////////**************////////////

// 1. Map Function
Array.prototype.myMap = function (callback) {
    let res = [];
    let array = this;
    for (let index = 0; index < array.length; index++) {
        res.push(callback(array[index], index, array));
    }
    return res;
}

// 2. Filter Function
Array.prototype.myFilter = function (callback) {
    let res = [];
    let array = this;
    for (let index = 0; index < array.length; index++) {
        let condition = callback(array[index], index, array);
        if (condition) res.push(array[index]);
    }
    return res;
}

// 3. Reduce Function
Array.prototype.myReduce = function (callback, initialValue) {
    let array = this;
    let index = (initialValue == null || initialValue == undefined) ? 1 : 0;
    initialValue = initialValue ?? array[0];
    for (; index < array.length; index++) {
        initialValue = callback(initialValue, array[index], index, array);
    }
    return initialValue;
}

// 4. Promise Function
class myPromise {
    onResponse = null;
    onReject = null;
    constructor(callback) {
        this.callback = callback;
    }
    respose = (value) => {
        this.onResponse(value);
    }
    reject = (value) => {
        this.onReject(value);
    }
    then = (thenHandler, errorHandler) => {
        this.onResponse = thenHandler;
        this.onReject = errorHandler;
        this.callback(this.respose, this.reject);
    }
}


// 5. .Call Function
Function.prototype.myCall = function myCall(context, ...parameters) {
    // Here context is this and this is callback. So we are reversing the context with this.
    context.callback = this;
    context.callback(...parameters);
}

// 5. .Apply Function
Function.prototype.myApply = function myCall(context, parameters) {
    context.callback = this;
    context.callback(...parameters);
}

// 7. .Bind Function
Function.prototype.myBind = function myCall(context, ...parameters) {
    context.callback = this;
    return function() {
        context.callback(...parameters);
    }
}
