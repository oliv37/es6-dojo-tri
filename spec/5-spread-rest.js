import { add } from '../src/math.js'; 

describe('Spread Rest', function() {

    it('default parameters', function() {
        function f(x, y= 3) {
            return x + y;
        }

        expect(f(0)).toEqual(3);
        expect(f(2)).toEqual(5);
        expect(f(3, 4)).toEqual(7);
    });

    it('spread examples', function() {
        since('error').expect([1, ...[2, 3], 4]).toEqual([1,2,3,4]);
        since('error').expect(Math.max(1, ...[5, 10], 8, 3)).toBe(10);
    });
    
    it('spread array', function() {
        const arr1 = ['john', 'jack', 'jim'];
        const arr2 = ['sandy', 'mary'];
        const arr3 = ['paul'];

        // TODO : compléter la ligne suivante
        const all = [...arr1, ...arr2, ...arr3];
        
        expect(all).toEqual(['john', 'jack', 'jim', 'sandy', 'mary', 'paul']);
    });

    it('spread function call', function() {
        const numbers = [4, 3, 10, 4, 2, 1];

        // TODO : compléter la ligne suivante (indice: utiliser la fonction Math.min)
        const min = Math.min(...numbers);

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

        since('error').expect(a).toBe(1);
        since('error').expect(rest).toEqual([2,3,4,5]);
        since('error').expect(fn()).toEqual([]);
    });

    it('rest join', function() {
        function join(delimiter, ...args) {
            return args.join(delimiter);
        }

        since('error').expect(join('-', 1, 2, 4)).toBe('1-2-4');
        since('error').expect(join(',', 'john', 'mike')).toEqual('john,mike');
    });

});