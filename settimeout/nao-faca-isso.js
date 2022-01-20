console.log(Date.now());

function esperar(ms){
    const fim = Date.now() + ms;

    while(Date.now() < fim){

    }
}

console.log("A");
esperar(1000);
console.log("b");