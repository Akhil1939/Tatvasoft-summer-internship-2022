enum Days{
    // sun, mon, tue, wed, thu, fri, sat
    sun="sun", mon="mon"
}

let whichDay:Days;

whichDay=Days.mon

// console.log(whichDay)
console.log(whichDay==="mon")


function whichDays(day:Days){
    
    return day;
}
console.log(whichDays(Days.mon))