class A {
    
    constructor() {
        this.prop1 = 4;
        this.prop2 = 3;
    }

    printProp1() {
        console.log(this.prop1);
    }

    getThis() {
        return this;
    }

    get prop3() {
        return this.prop1 + this.prop2;
    }

    static foo() {
        console.log('foo');
    }
    
}

const a = new A();

a.printProp1();
console.log(a.prop2);
console.log(a.prop3);
A.foo();
console.log(a.getThis());

const fn = a.getThis;
console.log(fn());