const arr = [1,2,3,4,5,6,7];
const rs = async ()=>{
    for await (let value of arr){
        console.log(value);
}
}
rs();
console.log("After");
