"use strict";
class myClass {
    constructor() {
        this.name = "akhil kukadiya";
        console.log("constructor called");
    }
    getName() {
        console.log(this.name);
        return this.name;
    }
}
let a1 = new myClass();
a1.getName();
// --------------------
class myClass1 {
    constructor(name1) {
        console.log("constructor called");
        this.name1 = name1;
    }
    getName() {
        console.log(this.name1);
    }
}
let a2 = new myClass1("akhil");
a2.getName();
