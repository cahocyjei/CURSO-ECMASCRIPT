const fnfuncion = ()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ?setTimeout(()=>{
            resolve("fnAsync!!")
        },2000)
        :reject(new Error('error'));
    })
}

const anotherFunction = async ()=>{
    const data = await fnfuncion();
    console.log(data);
    console.log("Before");
}

console.log("Hello");
console.log(anotherFunction());
console.log("After");