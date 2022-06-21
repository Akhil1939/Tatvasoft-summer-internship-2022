"use strict";
var UserUtils;
(function (UserUtils) {
    class Parent {
        constructor() {
            this.name = "";
        }
        setName(name) {
            return this.name = name;
        }
    }
    UserUtils.Parent = Parent;
})(UserUtils || (UserUtils = {}));
