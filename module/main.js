import mult from './foo.js';
import { add, number as a } from './foo.js';

export const fn = (n) => n + 3;

console.log(fn(a));
console.log(add(3, 4));
console.log(mult(3, 4));