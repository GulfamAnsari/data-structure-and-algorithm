/***********  What is design pattern? *****************/
// Its a template to solve a particular problem that can be used in many different situations.
// With the help of design pattern, we can come up with a cleaner code and reusable code.

/***********  Types of design pattern? *****************/
// There are mainly 3 types of design patterns
// 1. Creational design pattern: These patterns are designed for class instantiation/ object creation
// Examples are: Singlenton, Prototype, Factory, Builder

// 2. Structure pattern: Structural design patterns explain how to assemble objects and classes into larger structures,
// while keeping these structures flexible and efficient.
// Examples are: Facade, Proxy

// 3. Behavioral pattern: These design patterns are specifically concerned with communication between objects.
// Examples are: Observer pattern, mediator pattern


// 1. Builder Pattern
// In this pattern, Builder is a creational design pattern that lets you construct complex objects step by step.
class Collage {
    constructor(name, address, courses) {
    }
    setName = (name) => { this.name = name; return this };
    setAddress = (add) => { this.address = add; return this };
    setCourse = (courses) => { this.courses = courses; return this };
}
new Collage().setName("GGS").setAddress("").setCourse("");

// 2. Module Pattern
// In this type of pattern, we create a module like class and return some functions.
function Moduler() {
    let salary = 100;
    const changeSalary = (s) => {
        salary = s;
    }
    const getSalary = () => {
        return salary;
    }
    return {
        changeSalary,
        getSalary
    }
}
let fun = Moduler();

// 3. Facade Pattern
// Facade is a structural design pattern that provides a simplified interface to a library,
//  a framework, or any other complex set of classes by hiding the complex system details.
class Motor {
    constructor() {}
    addMotor = () => {}
}
class ElectricMachine {
    constructor() {
        this.motor = new Motor();
    }
    onMachin = () => {}
    offMachin = () => {}
}

// 4. Singlen pattern
// In this pattern, we always needs a single instance of class like db connection instance.
let instance = null;
class ConnectDataBase {
    store = [];
    constructor() {
        if (instance == null) instance = this;
        else return instance;
    }
    addtoStore = (v) => {
        this.store.push(v)
    }
}

// 5. Factory pattern
// In the factory pattern, we combine different instances into one instance.
class Employee {
    constructor() {
        this.salary = new Salary();
        this.benefits = new Benefits();
    }
}

class Salary {
}

class Benefits {
}

let emplyee = new Employee();

// 6. Protype pattern
// In this pattern, we reuse the parent class members to create new instances(Inheritance)
class Human {
    constructor(name) {
        this.name = name;
    }
}

class Man extends Human {
    constructor(name) {
        super(name);
    }
}
class Women extends Human {
    constructor(name) {
        super(name);
    }
}

let men = new Man("G");
let women = new Women("B");

// 7. Observer pattern
// In this type of pattern, there are three componets
// 1. Obserable, 2 subscriber, notify
// Once any observer subscribe to that obserable then he should nofity about any changes.
class ObserverPatter {
    constructor() {
        this.observer = [];
    }

    subscribe(callback) {
        this.observer.push(callback);
    }

    unsubcribe(fun) {
        this.observer = this.observer.filter((ele) => {
            return ele != fun;
        })
    }

    notify(val) {
        this.observer.forEach((ele) => {
            ele(val);
        })
    }
}

let callback = (data) => { console.log(data)};
let obsPattern = new ObserverPatter();
obsPattern.subscribe(callback)
obsPattern.subscribe((data) => { console.log(data, "s1")})
obsPattern.subscribe((data) => { console.log(data, "s2")});
obsPattern.unsubcribe(callback);

console.log(obsPattern.notify('new notification'));


// 8 . PubSub pattern
class PublisherSubscriber {
    constructor() {
        this.subscribers = new Map();
    }

    subscribe(callback, id) {
        if (this.subscribers.has(id)) {
            let arr = this.subscribers.get(id);
            arr.push(callback);
            this.subscribers.set(id, arr);
        } else {
            this.subscribers.set(id, [callback]);
        }
    }

    unsubscribers(id) {
        let array = this.subscribers.get(id);
        this.subscribers.set(id, array.filter((el) => { return el != id }));
    }

    publish(channelId) {
        for(let callback of this.subscribers.get(channelId)) {
            callback("new video published on " + channelId);
        }
    }
}

let pubsub = new PublisherSubscriber();
pubsub.subscribe((val) => {
    console.log(val)
}, 'droidtechknow');
pubsub.subscribe((val) => {
    console.log(val)
}, 'droidtechknow');
pubsub.subscribe((val) => {
    console.log(val)
}, 'droidtechknow');
pubsub.subscribe((val) => {
    console.log(val)
}, 'techninja');
pubsub.publish('droidtechknow');

// 9. Proxy pattern
// In this type of pattern, we interect with the proxy rather than the origional class
const User  = {
    name: "something",
    add: "b243 streen no"
}

const proxyUser = new Proxy(User, {
    set(target, propery, value) {
        target[propery] = value;
        return true;
    },
    get(target, property) {
        return target[property];
    }
})

// 9. Container/Prentational Pattern
// In this type of pattern, only one class/component knows the flow of and other components are just do the rendering

// 10. Mediater Pattern
// In this type of pattern, we use the mediater class to communicate other classes. Example Chatroom.

// Reference:
// https://refactoring.guru/design-patterns/facade


