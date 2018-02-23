describe('Arrow function', () => {

    it('typeof', () => {
        const mult = (x, y) => x * y;
        
        since('error').expect(typeof mult).toBe('function');
    });

    it('function declaration', () => {
        
        const add2 = x => x + 2;
        // TODO : compléter la ligne suivante en utilisant une arrow function
        const isOdd = n => n % 2; 
        const transform = (arr, filterFn, mapFn) => arr.filter(filterFn).map(mapFn);

        since('error').expect(add2(4)).toBe(6);
        since('error').expect(add2(7)).toBe(9);
        expect(isOdd(1)).toBeTruthy();
        expect(isOdd(9)).toBeTruthy();
        expect(isOdd(2)).toBeFalsy();
        since('error').expect(transform([1, 4, 7], isOdd, add2)).toEqual([3, 9]);
    });

    it('literal object', () => {
        const func = () => ({a: 2});

        since('error').expect(func()).toEqual({a: 2});
    });

    it('ternary', () => {
        const func = (a, b) => a > b ? a : b;

        // :)
        since('error').expect(func(2, 3)).toBe(3);
        since('error').expect(func(4, 4)).toBe(4);
        since('error').expect(func(9, 7)).toBe(9);
    })

    it('destructuring', () => {
        const func = ({a, b}) => a + b;

        var foo = {a: 1, b: 3};
        var bar = {a: 7, b: 2};
        
        since('error').expect(func(foo)).toBe(4);
        since('error').expect(func(bar)).toBe(9);
    });

    it('rest', () => {
        const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr);

        since('error').expect(sum(1, 2, 5, 8)).toBe(16);
        since('error').expect(sum(1, 2)).toBe(3);
        since('error').expect(sum(1, 1, 1, 2, 6)).toBe(11);
    });

    it('closure', () => {
        const makeAdd = (nb1) => (nb2 = 0) => nb1 + nb2;

        const fn1 = makeAdd(2);
        const fn2 = makeAdd(5);

        since('error').expect(fn1(4)).toBe(6);
        since('error').expect(fn1(5)).toBe(7);
        since('error').expect(fn1()).toBe(2);

        since('error').expect(fn2(4)).toBe(9);
        since('error').expect(fn2(1)).toBe(6);
        since('error').expect(fn2()).toBe(5);
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

        since('error').expect(obj === obj.func()).toBeFalsy();// remplacer toBe() par .toBeTruthy(); ou .toBeFalsy();
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

        since('error').expect(obj === obj.func()).toBeTruthy(); // .toBeTruthy(); .toBeFalsy();
        since('error').expect(obj.func2()).toBe(5);
        since('error').expect(obj.func3()).toBe(3);
        since('error').expect(obj.func4()).toBe(undefined);
    });


});