import { sum, round, total } from './numbers.js';
import Product from './product.js';


console.log(sum(3,4));

console.log(round(3.25345, 2));

const obj = new Product("Computador", 800.0, 10);

console.log(obj);

console.log(obj.total());
