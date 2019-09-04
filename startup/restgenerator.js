//rest generator using array

let a=[1,2,3,4,5,6,7,8,9];
let[first,second,third,...last]=a;
console.log(`${first} ${third}`);
console.log(last);

//output:
//dell@Dell:~/Desktop/startup$ node restgenerator.js
//1 3
//[ 4, 5, 6, 7, 8, 9 ]


//rest generator using array

let f={
    name:"pradnya",
    surname:"suryawanshi",
    age:20,
    bio:"in cs",
}
let{name,age,...next}=f;
console.log(next);

//output:ell@Dell:~/Desktop/startup$ node restgenerator.js
//{ surname: 'suryawanshi', age: 20, bio: 'in cs' }


//spread operations

//merging two arrays
let p=[70,80,90];
let k=[89,99,100,120,999];
let j=[...p,...k];
console.log(j);
//output:[
 // 70,  80,
  // 90,  89,
  // 99, 100,
  //120, 999
//]


//merging two objects
let h={
    colour:"red",
    pattern:"simple",
}

let y={
    type:"golden",
    bottle:"silver",
}
let s1={...h,...y};
console.log(s1);
//output:{ colour: 'red', pattern: 'simple', type: 'golden', bottle: 'silver' }