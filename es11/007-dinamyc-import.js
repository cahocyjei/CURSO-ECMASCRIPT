const button = document.getElementById("btn");

button.addEventListener("click", async ()=>{
    const module = await import("./module.js");
    console.log(module);
    module.hello();
})
const ruta = "./module.js";

const data = async ()=>{
    const res = await import(ruta);
    console.log(res.hello());
}

import(ruta)
.then(response=>console.log(response.hello()))
.catch(err=>console.log(err));

data();
console.log("Hi!!");