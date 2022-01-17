console.log("Um string literal pode ficar entre aspas duplas");
console.log('Um string literal pode ficar entre aspas simples');
console.log(`Um string literal pode ficar entre crases`);

console.log("Concatenação e interpolação");
const num = 14.5;
console.log("O valor do produto é "+num);
console.log('O valor do produto é '+num);
console.log(`O valor do produto é ${num}`);

console.log("Conversão de String e Number");

const str1 = num.toString();
console.log(`Tipo de ${str1} : ${typeof str1}`);

const str2 =num.toFixed(2);
console.log(`Tipo de ${str2} : ${typeof str2}`);

const num1 = Number("14.5");
console.log(`Tipo de ${num1} : ${typeof num1}`);

const num2 = parseInt("21",10);
console.log(`Tipo de ${num2} : ${typeof num2}`);

const num3 = parseInt("21",16);
console.log(`Tipo de ${num3} : ${typeof num3}`);

const num4 = parseFloat("21.34", 10);
console.log(`Tipo de ${num4} : ${typeof num4}`);

const str = "Maria Silva  ";
 console.log(`const str = "Maria Silva  "`);

/*teny String*/
const resultado = str.toLowerCase(); 
console.log(resultado);

console.log(`toLowerCase: ${str.toLowerCase()}`);

/*capital String*/
console.log(`toUpperCase: ${str.toUpperCase()}`);

/*Position String*/
console.log(`charAt: ${str.charAt(3)}`);
console.log(`charAt: ${str[3]}`);

/*Replace String*/
console.log(`Replace: ${str.replace("i","$")}`);
console.log(`Replace: ${str.replace(/i/g,"$")}`);

/*Quantity String*/
console.log(`Length:${str.length}`);

/*first occurrence*/
console.log(`indexOf:${str.indexOf("i")}`);
/*Last occurrence*/
console.log(`LastIndexOf:${str.lastIndexOf("i")}`);

console.log(`substring: ${str.substring(3,8)}`);

const data = "14/10/2021";

const dia = Number(data.substring(0,2));
const mes = data.substring(3,5);

console.log(dia);
console.log(mes);

const valor = 200.99;

const novoValor = valor.toString().replace(".", ",");

console.log(novoValor);

/*no white space*/
console.log(`Trim: ${str.trim()}`);
