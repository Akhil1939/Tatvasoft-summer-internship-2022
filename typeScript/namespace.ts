///  <reference path="./util.ts" />

namespace UserUtils {
    export class user extends Parent implements userType{
        getName(){
            return this.name
        }
    }
}
let u1 = new UserUtils.user();
u1.setName("raj")
console.log(u1.getName())