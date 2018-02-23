// TODO : Importer les fonctions présentes dans src/math.js pour faire passer les tests
import { substract, add as addWith3Params } from '../src/math.js';
import sayHello from '../src/math.js';

describe('Import ES6', function() {
    
    it('add function with 3 params', function() {
        expect(addWith3Params(2, 2, 5)).toBe(9);
    });

    it('substract function', function() {
        expect(substract(3, 2)).toBe(1);
    });
    
    it('sayHello', function() {
        expect(sayHello()).toBe('Hello from math.js');
    });
});