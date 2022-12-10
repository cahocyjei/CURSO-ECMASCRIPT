async function* fnGenerator() {
    yield await Promise.resolve("Hola!!");
    yield await Promise.resolve("Mundo");
    yield await Promise.resolve("Como estas?")
} ;

const res = fnGenerator();
res.next().then(response=>console.log(response.value));
res.next().then(response=>console.log(response.value));
res.next().then(response=>console.log(response.value));