import { add } from '../src/math.js'; 

describe('Spread Rest', function() {

    it('spread examples', function() {
        since('error').expect([1, ...[2, 3], 4]).toEqual(/* ??? */);
        since('error').expect(Math.max(1, ...[5, 10], 8, 3)).toBe(/* ??? */);
    });
    
    it('spread array', function() {
        const arr1 = ['john', 'jack', 'jim'];
        const arr2 = ['sandy', 'mary'];
        const arr3 = ['paul'];

        // TODO : compléter la ligne suivante
        // const all = ...
        
        expect(all).toEqual(['john', 'jack', 'jim', 'sandy', 'mary', 'paul']);
    });

    it('spread function call', function() {
        const numbers = [4, 3, 10, 4, 2, 1];

        // TODO : compléter la ligne suivante (indice: utiliser la fonction Math.min)
        // const min = ...

        expect(min).toBe(1);
    });

    it('spread object', function() {
        const p1 = {
            name: 'john',
            age: 10,
            address: {
                town: 'paris',
                zip: '75002'
            },
            enabled: true
        };

        const p2 = {...p1, enabled: false};

        expect(p1 == p2)// toBeTruthy() toBeFalsy()
        expect(p1.address == p2.address)// toBeTruthy() toBeFalsy()
        expect(p2.name).toBe(/* ??? */);
        expect(p2.age).toBe(/* ??? */);
        expect(p2.enabled).toBe(/* ??? */);
    });

    it('rest array', function() {
        // TODO : réécrire la fonction add dans 'math.js' pour accepter un nombre illimité d'arguments

        expect(add(1, 2 ,3, 4)).toBe(10);
        expect(add(1, 1, 1, 1, 1, 1, 1, 1)).toBe(8);
        expect(add(3, 7)).toBe(10);
    });

    it('rest function parameters', function() {
        const [a, ...rest] = [1, 2, 3, 4, 5];
        function fn(...args) {
            return args;
        }

        expect(a).toBe(/* ??? */);
        expect(rest).toEqual(/* ??? */);
        expect(fn()).toEqual(/* ??? */);
    });

    it('rest join', function() {
        function join(delimiter, ...args) {
            return args.join(delimiter);
        }

        expect(join('-', 1, 2, 4)).toBe(/* ??? */);
        expect(join(',', 'john', 'mike', 'richard', 'paul')).toEqual(/* ??? */);
    });

    it('rest object', function() {
        const p1 = {
            name: 'john',
            age: 10,
            address: {
                town: 'paris',
                zip: '75002'
            },
            enabled: true
        };

        // TODO : compléter la ligne suivante
        // const ??? = p1;

        expect(address).toBe(p1.address);
        expect(restP1).toEqual({name: 'john', age: 10, enabled: true});
        
    });

});