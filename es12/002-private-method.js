class User{

    constructor(name){
        this.name = name||"Carlos";
    }

    greeting(){
        return "Hola Mundo";
    }
    get #uGetname(){
        return this.name;
    }

    set #uSetname(name){
        this.name = name;
    }
}

const user = new User('Omar');
console.log(user.name);
console.log();