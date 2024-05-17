class Logger {
    constructor() {
        this.map = new Map();
    }

    shouldPrintMessage(time, message) {
        if (this.map.has(message)) {
            if (time - this.map.get(message) >= 10) {
                this.map.set(message, time);
                return true;    
            } else {
                return false;
            }
        } else {
            this.map.set(message, time);
            return true;
        }
    }

}
let  logger = new Logger();
console.log(logger.shouldPrintMessage(1, "foo"));  // return true, next allowed timestamp for "foo" is 1 + 10 = 11
console.log(logger.shouldPrintMessage(2, "bar"));  // return true, next allowed timestamp for "bar" is 2 + 10 = 12
console.log(logger.shouldPrintMessage(3, "foo"));  // 3 < 11, return false
console.log(logger.shouldPrintMessage(8, "bar"));  // 8 < 12, return false
console.log(logger.shouldPrintMessage(10, "foo")); // 10 < 11, return false
console.log(logger.shouldPrintMessage(11, "foo"));