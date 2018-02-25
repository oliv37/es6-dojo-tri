// get
var obj = {
    names: ['jim', 'anderson', 'jhon'],
    get last() {
        return this.names[this.names.length - 1];
    }
};

console.log(obj.last);

// set
var language = {
    set current(name) {
      this.log.push(name);
    },
    
    log: []
};

language.current = 'EN';
language.current = 'FA';

console.log(language.log);

//
this === window

// Method Properties + this
var obj = {
    a: 3,
    foo: function() {
        return this.a;
    },
    bar() {
        return this.a;
    }
};

console.log(obj.foo());
console.log(obj.bar());

function foo() {
	return this.a;  
}

console.log(foo());

// call
console.log(foo.call(obj));

var obj = { a: 3 };

function foo(b) {
	return this.a + b;  
}

console.log(foo.call(obj, 4));

// apply
console.log(foo.call(obj));

var obj = { a: 3 };

function foo(b) {
	return this.a + b;  
}

console.log(foo.call(obj, 4));

// bind
var obj = { a: 3 };

function foo(b) {
	return this.a + b;  
}

var bar = foo.bind(obj);
console.log(bar(1));

bar = foo.bind(obj, 4);
console.log(bar());

//
function add(a, b, c) {
    return a + b + c;    
}

var foo = add.bind(undefined, 1, 2);
console.log(foo(4));
