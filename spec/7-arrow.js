describe('Arrow function', () => {

    it('typeof', () => {
        const mult = (x, y) => x * y;
        
        since('error').expect(typeof mult).toBe(/* ??? */);
    });

    it('function declaration', () => {
        
        const add2 = x => x + 2;
        // TODO : compléter la ligne suivante en utilisant une arrow function 
        // (isOdd renvoie true si le chiffre est imparair, false sinon)
        // const isOdd = ... 
        const transform = (arr, filterFn, mapFn) => arr.filter(filterFn).map(mapFn);

        since('error add2(4)').expect(add2(4)).toBe(/* ??? */);
        since('error add2(7)').expect(add2(7)).toBe(/* ??? */);
        expect(isOdd(1)).toBeTruthy();
        expect(isOdd(9)).toBeTruthy();
        expect(isOdd(2)).toBeFalsy();
        since('error transform').expect(transform([1, 4, 7], isOdd, add2)).toEqual(/* ??? */);
    });

    it('literal object', () => {
        const func = () => ({a: 2});

        since('error').expect(func()).toEqual(/* ??? */);
    });

    it('ternary', () => {
        const func = (a, b) => a > b ? a : b;

        since('error 2 3').expect(func(2, 3)).toBe(/* ??? */);
        since('error 4 4').expect(func(4, 4)).toBe(/* ??? */);
        since('error 9 7').expect(func(9, 7)).toBe(/* ??? */);
    })

    it('destructuring', () => {
        const func = ({a, b}) => a + b;

        var foo = {a: 1, b: 3};
        var bar = {a: 7, b: 2};
        
        since('error').expect(func(foo)).toBe(/* ??? */);
        since('error').expect(func(bar)).toBe(/* ??? */);
    });

    it('rest', () => {
        const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr);

        since('error sum(1, 2, 5, 8)').expect(sum(1, 2, 5, 8)).toBe(/* ??? */);
        since('error sum(1, 2)').expect(sum(1, 2)).toBe(/* ??? */);
        since('error (sum(1, 1, 1, 2, 6)').expect(sum(1, 1, 1, 2, 6)).toBe(/* ??? */);
    });

    it('closure', () => {
        const makeAdd = (nb1) => (nb2 = 0) => nb1 + nb2;

        const fn1 = makeAdd(2);
        const fn2 = makeAdd(5);

        since('error fn1(4)').expect(fn1(4)).toBe(/* ??? */);
        since('error fn1(5)').expect(fn1(5)).toBe(/* ??? */);
        since('error fn1()').expect(fn1()).toBe(/* ??? */);

        since('error fn2(4)').expect(fn2(4)).toBe(/* ??? */);
        since('error fn2(1)').expect(fn2(1)).toBe(/* ??? */);
        since('error fn2()').expect(fn2()).toBe(/* ??? */);
    });

    it('This - Object- 1', function() {
        var obj = {
            a: 3,
            func: function() {
                function getThis() {
                    return this;
                }

                return getThis();
            }
        };

        since('error').expect(obj === obj.func()).toBe();// remplacer toBe() par .toBeTruthy(); ou .toBeFalsy();
    });

    it('This - Object - 2', function() {
        var obj = {
            a: 3,
            func: function() {
                const getThis = () => this;
                return getThis();
            },
            func2: function() {
                const add2 = () => this.a + 2;
                return add2();
            },
            func3() { return this.a },
            func4: () => {
                return this.a;
            }
        };

        since('error obj === obj.func()').expect(obj === obj.func()).toBe()// .toBeTruthy(); .toBeFalsy();
        since('error obj.func2()').expect(obj.func2()).toBe(/* ??? */);
        since('error obj.func3()').expect(obj.func3()).toBe(/* ??? */);
        since('error obj.func4()').expect(obj.func4()).toBe(/* ??? */);
    });


});