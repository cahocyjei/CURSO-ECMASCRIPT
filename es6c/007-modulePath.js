function data(){
    console.log("Before");
    return new Promise((resolve,reject)=>{
        if (false) {
            setTimeout(()=>{
            resolve([
                {name:"Omar",age:56,country:"CO"},
                {name:"Camilo",age:14,country:"MX"}
            ])
        },2000);
        }else{
            reject("whoppsss!!");
        }
        
    });
}
export default data;