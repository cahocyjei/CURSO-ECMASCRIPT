const prom1 = ()=>{
    return new Promise((resolve,reject)=>{
        (true)?resolve('resolve'):reject('reject');
    });
}
//const resp = async ()=>{

//const r = await prom1(); 
  //console.log(r);
//}

//resp();

const re = await prom1();
console.log(re);
