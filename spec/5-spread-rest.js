import { add } from '../src/math.js'; 

describe('Spread Rest', function() {

    it('default parameters', function() {
        function f(x, y= 3) {
            return x + y;
        }

        since('error f(0)').expect(f(0)).toEqual(/* ??? */);
        since('error f(2)').expect(f(2)).toEqual(/* ??? */);
        since('error f(3, 4)').expect(f(3, 4)).toEqual(/* ??? */);
    });

    it('spread examples', function() {
        since('error ...').expect([1, ...[2, 3], 4]).toEqual(/* ??? */);
        since('error max').expect(Math.max(1, ...[5, 10], 8, 3)).toBe(/* ??? */);
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

        since('error a').expect(a).toBe(/* ??? */);
        since('error rest').expect(rest).toEqual(/* ??? */);
        since('error fn').expect(fn()).toEqual(/* ??? */);
    });

    it('rest join', function() {
        function join(delimiter, ...args) {
            return args.join(delimiter);
        }

        since('error -').expect(join('-', 1, 2, 4)).toBe(/* ??? */);
        since('error ,').expect(join(',', 'john', 'mike')).toEqual(/* ??? */);
    });

});