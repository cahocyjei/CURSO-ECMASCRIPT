const prom1 = ()=> Promise((resolve,reject)=>resolve("resolve"));


const prom2 = ()=>new Promise((resolve,reject)=>reject("reject"));


Promise.allSettled([prom1,prom2])
.then(response=>console.log(response));