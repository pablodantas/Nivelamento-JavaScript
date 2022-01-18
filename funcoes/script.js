function soma1(num1, num2){
    return num1+num2;
}

const soma2 = function (num1,num2){
    return num1+num2;
}

const soma3 = (num1, num2) => {
    return num1 + num2;
}

const soma4= (num1,num2) => num1 + num2;

const dobro1 = function(num){
    return num*2;
}

const dobro2 = num => num*2;

//Fucao que nao tem um retorno definido, por padrao ela retorna undefined

function mostrarPreco(preco){
    console.log(`Preco = ${preco*2}`)
}

// Variaveis definidas dentro do escopo da funcao nao vazam escopo mesmo com o tipo var

function areaCirculo(raio){
    const pi = 3.14;
    return pi *raio * raio;
}

// Function hoisting: funções do JS são "movidas" para cima pelo motr do JS

function teste(x){
    console.log(`TEST= ${x}`);
}

teste = (10);

// Funcoes podem ser passadas como argumento

function triplo(num){
    return num*3;
}

function aplicar(f, num){
    const result = f(num);
    console.log(`RESULTADO = ${result}`);
}

aplicar(triplo, 10);
aplicar(dobro1, 10);