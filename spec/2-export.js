// TODO : Ajouter le code nécéssaire dans robot.js pour faire passer les tests suivants
import * as robot from '../src/robot.js';
import greeting from '../src/robot.js';

describe('Export ES6', function() {
    
    it('turn left', function() {
        expect(robot.turnLeft()).toBe('Turn left');
    });
    
    it('turn right', function() {
        expect(robot.turnRight()).toBe('Turn right');
    });

    it('height', function() {
        expect(robot.height).toBe(120);
    });

    it('robot can also handle substraction', function() {
        expect(robot.substract(5, 3)).toBe(2);
    });

    it('default export', function() {
        expect(greeting()).toBe('hello');
    });

});