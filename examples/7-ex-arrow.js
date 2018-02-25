function foo() {
    console.log('foo');
}

foo();

var bar = function() {
    console.log("bar");
};

bar();

// map / filter / reduce

// reduce : transformer un tableau en une seule valeur (reduce(callback, valeur initiale)
// callback(accumulateur, valeur courrante)

const result = [1, 2, 3]
    .filter(a => a > 1)
    .map(a => a + 1)
    .reduce((acc, curr) => acc + curr, 0);

console.log(result);

//
const bar = () => {
    console.log("bar");
};

const add = (a, b) => {
    return a + b;
};

bar();
console.log(add(3, 2));

//
const fn = (a) => {
    return (b) => {
        return a + b;
    };
};

const add1 = fn(1);
console.log(add1(4));

//
var obj = {
    a: 3,
    func: function() {
        const getA = () => this.a;
        return getA();
    },
    foo: function(){ return this.a; },
    bar: () => this.a
};

const fn = obj.func;

console.log(obj.func());
console.log(fn());
console.log(obj.bar());
