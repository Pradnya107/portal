//it consist of a parameter of function inside value(function{value})
//settimeout n setinterval have same syntax
const z=setInterval(()=>{
let a="my name is khan";
let b="its a movie";
console.log(`${a} ${b}`);

},2000)

const p=setInterval(()=>{
    let a="my name is pradnya";
    let b="its a name";
    console.log(`${a} ${b}`);
    
    },2000)
    
    clearTimeout(z);


    //event loop
    setTimeout(()=>{
        console.log("running late");
    
    },3000)
    console.log("hi")