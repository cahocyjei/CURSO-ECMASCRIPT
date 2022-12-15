const prom1 = new Promise((resolve,reject)=>reject('reject'));
const prom2 = new Promise((resolve,reject)=>resolve('resolve'));
const prom3 = new Promise((resolve,reject)=>resolve('resolve2'));

Promise.any([prom1,prom2,prom3])
.then(response=>console.log(response));

Promise.allSettled([prom1,prom2,prom3])
.then(response=>console.log(response));