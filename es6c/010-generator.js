function* getId(){
    let i = 10;
    while (i > 0) {
      yield i;  
        i--; 
    }
    
     
}

const id = getId();

for (let index = 0; index < 5; index++) {
  console.log(id.next().value);
}

