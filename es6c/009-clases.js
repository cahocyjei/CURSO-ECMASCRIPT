class user{

    constructor(name,age,country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    greeting(){
        return `Hola ${this.name}`
    }

    get uAge(){
        return this.age;
    }

    set uAge(a){
        this.age = a;
    }
}
const newUser = new user("Omar",56,"CO");

console.log(newUser.greeting());