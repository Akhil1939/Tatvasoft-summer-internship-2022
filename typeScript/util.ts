namespace UserUtils{
    export class Parent{
        name:string="";
        setName(name:string){
            return this.name = name
        }
    }
    export interface userType{
        getName():string;
        
    } 
}