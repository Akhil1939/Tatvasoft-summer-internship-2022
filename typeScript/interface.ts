interface userType{
    name:string,
    age:number,
    getName:()=>string
}

let user:userType={
    name:'anil kaka',
    age:30,
    getName:function(){
        return "name from function"
    }
}
console.log(user)
console.log(user.getName())


