const list = new Set();

for (let index = 0; index < 10; index++) {
    list.add("item".concat(index));   
}

console.log(list);