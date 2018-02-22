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

        since('error').expect(p1 == p2).toBe()// remplacer toBe() par toBeTruthy() toBeFalsy()
        since('error').expect(p1.address == p2.address).toBe()// remplacer toBe() par toBeTruthy() toBeFalsy()
        since('error').expect(p2.name).toBe(/* ??? */);
        since('error').expect(p2.age).toBe(/* ??? */);
        since('error').expect(p2.enabled).toBe(/* ??? */);
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

        since('error').expect(a).toBe(/* ??? */);
        since('error').expect(rest).toEqual(/* ??? */);
        since('error').expect(fn()).toEqual(/* ??? */);
    });

    it('rest join', function() {
        function join(delimiter, ...args) {
            return args.join(delimiter);
        }

        since('error').expect(join('-', 1, 2, 4)).toBe(/* ??? */);
        since('error').expect(join(',', 'john', 'mike')).toEqual(/* ??? */);
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

        expect(restP1).toEqual({name: 'john', age: 10, enabled: true});
        expect(address).toBe(p1.address);
    });

});