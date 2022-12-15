const math = /\a/g;
const str = 'apple ,manzana,pera,apple,uvas,apple';
var newStr = "";
var s = 0;
for(const m of str.matchAll(math)){
s++;
console.log(m);
console.log(str.charAt(m.index));
newStr = str.replace(str.charAt(m.index),"_");
}
console.log("Esta palabra está repetida " + s + " veces");
console.log(newStr);