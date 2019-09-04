//arrow function in object (mostly not used in obj)
let a={
    firstname:"pradnya",
    lasname:"suryawanshi",
    getfullname:()=>{
        return `${a.firstname} ${a.lastname}`
    }
}
console.log(a.getfullname());