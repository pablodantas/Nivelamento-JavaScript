function dizerOla(){
    console.log('Olá');
}

dizerOla();

setTimeout(dizerOla, 2000);

function dizerBomDia(nome){
    console.log(`Bom Dia ${nome}`);
}

setTimeout(() => {
    dizerBomDia("Maria");
    setTimeout(() => {
        dizerBomDia("Joao");
        setTimeout(() => {
            dizerBomDia("Ana");
        }, 2000);
    }, 2000);
}, 3000);

console.log("A");
console.log("B");
