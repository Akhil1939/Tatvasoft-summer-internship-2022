"use strict";
///  <reference path="./util.ts" />
var UserUtils;
(function (UserUtils) {
    class user extends UserUtils.Parent {
        getName() {
            return this.name;
        }
    }
    UserUtils.user = user;
})(UserUtils || (UserUtils = {}));
let u1 = new UserUtils.user();
u1.setName("raj");
console.log(u1.getName());
