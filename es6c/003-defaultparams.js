function user(name,age,country){
this.name = name || "Omar";
this.age = age || 56;
this.country = country || "CO";
};

const newUser = new user();
const newUser2 = new user("Camilo",14,"MX")
console.log(newUser);
console.log(newUser2);