"use strict";
var Days;
(function (Days) {
    // sun, mon, tue, wed, thu, fri, sat
    Days["sun"] = "sun";
    Days["mon"] = "mon";
})(Days || (Days = {}));
let whichDay;
whichDay = Days.mon;
// console.log(whichDay)
console.log(whichDay === "mon");
function whichDays(day) {
    return day;
}
console.log(whichDays(Days.mon));
