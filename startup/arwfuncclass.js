class student{
    college="sies";
    constructor(name,surname,age,branch){
        this.name=name;
        this.surname=surname;
        this.age=age;
        this.branch=branch;
    }
        getfullName=()=>{
            return `${this.name} ${this.surname}`
        }
        getdetails=()=>{
            return `${this.name} ${this.age} ${this.branch} ${this.college}`
        }
    getcollege=()=>{
        return `${this.college}`
    }
    
}
let a=new student("pradnya","suryawanshi",20,"cs");
console.log(a.getfullName());
console.log(a.getdetails());
console.log(a.getcollege());


//dell@Dell:~/Desktop/startup$ node arwfuncclass.js
//pradnya suryawanshi
//pradnya 20 cs sies
//sies