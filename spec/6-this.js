var global = this;

describe('This', function() {

    it('With window', function() {
        var obj = {
            getThis: function() {
                return this;
            }
        }

        function func() {
            return this;
        }

        since('error global === window').expect(global === window).toBe(); // remplacer toBe() par .toBeTruthy(); ou .toBeFalsy();
        since('error obj.getThis() === window').expect(obj.getThis() === window).toBe(); //.toBeTruthy(); .toBeFalsy();
        since('error obj.getThis() === obj').expect(obj.getThis() === obj).toBe(); //.toBeTruthy(); .toBeFalsy()
        since('error func() === window').expect(func() === window).toBe(); //.toBeTruthy(); .toBeFalsy();
    });

    it('This - Object', function() {
        function getA() {
            return this.a;
        }

        var obj = {
            a: 3,
            myMethod: function() {
                return getA();
            },
            getA: function() {
                return this.a;
            },
            get propA() {
                return this.a;
            }
        }

        since('error myMethod').expect(obj.myMethod()).toBe(/* ??? */);
        since('error getA').expect(obj.getA()).toBe(/* ??? */);
        since('error propA').expect(obj.propA).toBe(/* ??? */);
    });

    it('This - Call', function() {
        function fun(n) {
            this.a = 7;
            this.b = 4;
            this.c = n;
        }

        var obj = { a: 3 };

        fun.call(obj, 10);

        since('error obj.a').expect(obj.a).toBe(/* ??? */);
        since('error obj.b').expect(obj.b).toBe(/* ??? */);
        since('error obj.c').expect(obj.c).toBe(/* ??? */);
    });

    it('This - Bind', function() {
        window.a = 6;

        function addValueToA(b) {
            return this.a + b;
        }

        var obj = { a: 3 }

        var func1 = addValueToA.bind(obj);
        var func2 = addValueToA.bind(obj, 7);

        since('error addValueToA').expect(addValueToA(3)).toBe(/* ??? */);
        since('error func1').expect(func1(3)).toBe(/* ??? */);
        since('error func2()').expect(func2()).toBe(/* ??? */);
        since('error func2(5)').expect(func2(5)).toBe(/* ??? */);

        window.a = undefined;
    });
    
});