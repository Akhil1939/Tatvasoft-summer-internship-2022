 class myClass{
    name="akhil kukadiya"
    constructor(){
        console.log("constructor called")
    }
        getName():string{
        console.log(this.name)
        return this.name

    }
 }
 let a1=new myClass();
 a1.getName();


// --------------------


 class myClass1{
    name1
    constructor(name1:string){
        console.log("constructor called")
        this.name1=name1
    }
        getName(){
        console.log(this.name1)

    }
 }
 let a2=new myClass1("akhil");
 a2.getName();