const arr = [1,2,3,4,[4,3,2,1,[5,6,7]]];

const ar = arr.flat(3)
.flatMap(v =>v*2);
console.log(ar);