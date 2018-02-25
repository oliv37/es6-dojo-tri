// default parameter
function foo(a, b = 3) {
    return a + b;
}

console.log(foo(3, 4));
console.log(foo(3, 0));
console.log(foo(3));

// spread
const arr = [1, 2, 3];
const arr2 = [0, ...arr];
console.log(arr2);

// 
function foo(a, b, c) {
    return a + b + c;
}

console.log(foo(...[1, 2, 3]));

// rest
const [a, ...rest] = [1, 2, 3, 4];
console.log(a);
console.log(rest);


//
function foo(a, b, ...rest) {
    return a + b  + rest.length;
}

console.log(foo(1, 2));
console.log(foo(1, 2, 1, 1));