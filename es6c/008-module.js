import data from './007-modulePath.js';

const datos = async ()=>{
    const result = await data();
    console.log(result);
    console.log("After");
};
datos();
console.log("Hello!!");