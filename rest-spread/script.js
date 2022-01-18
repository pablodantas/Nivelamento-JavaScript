// REST: valores passados com virgula => array

function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

const result1 = sum(1, 2, 3, 4);

console.log(result1);

const result2 = Math.max(2, 5, 9, 3);

console.log(result2);

// SPREAD: objeto => membros separados por virgula

const myNumbers = [2, 3, 10, 5];

const result3 = Math.max(...myNumbers);

console.log(result3);

const item = {
    description: "Computador",
    price: 30000.00,
    quantity: 1
}

const cloneItem = {...item};

const cloneItemPlus = {...item, weigth: 10};

