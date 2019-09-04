//syntax for promise (promises to return back)[catch-reject,then-resolve]

//let a=new Promise((resolve,reject)=>{
//    resolve(data);
//    reject(error);
//});

let a=new Promise((resolve,reject)=>{
resolve("hi");
});
a.then((value)=>{                          //flow (chain) of promises
console.log(value);
})
a.catch((value)=>{                          //way to handle errors gracefully for resolve function
console.log(value);
});