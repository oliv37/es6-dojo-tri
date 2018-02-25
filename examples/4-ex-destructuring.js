// raccourci propriété
const a = 4;

var obj = { 
    a,
    b: 3
};

console.log('a = ' + obj.a);
console.log(`b = ${obj.b}`);

// nom de propriété calculé
const bar = 'bar';

var obj = { 
    ['foo' + bar]: 4
};

console.log(obj.foobar);
console.log(obj['foobar']);

//
const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a);
console.log(b);

//
let a, b;

[a, b= 4] = [1, 2];
console.log(a);
console.log(b);

[a, b= 4] = [1];
console.log(a);
console.log(b);

//
function foo([x, y]) {
    return x + y;
}

console.log(foo([4,3,5,6]));

//
var obj = {
    a: 2,
    b: 3
};

const { b } = obj;
console.log(b);

//
var obj = {
    a: 2,
    b: 3
};

const { b: bar } = obj;
console.log(bar);

//
var obj = {
    a: 2,
};

const { b } = obj;
console.log(b);

//
var obj = {
    a: 2,
    b: 3
};

const { b: bar = 4 } = obj;
console.log(bar);
