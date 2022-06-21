
// normal
function myFun(data:object):object{
    return data
}
console.log(myFun({name:"akhil",age:'20'}))


// generic
function myFun1<T>(data:T):T{
    return data
}
console.log(myFun1({name:"akhil",age:'20'}))
console.log(myFun1({name:"ram",age:'22'}).age)


