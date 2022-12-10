const consulta = ()=>{
    return new Promise((resolve,reject)=>{
        if (true) {
            resolve("Hey!!");
        }else{
            reject("Woooopsss!!");
        }
    })
}
consulta().then(response=>console.log(response))
.catch(err=>console.error(err))
.finally(()=>console.log("finally"));