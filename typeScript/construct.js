"use strict";
class users2 {
    // name ="";
    // age=20;
    // email="";
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        // this.name=name;
        // this.age=age;
        // this.email=email;
        console.log(" construct called");
    }
    display() {
        console.log(this.name, this.age, this.email);
    }
}
const u2 = new users2("akhil", 34, "asdfg@gmail.com");
u2.display();
