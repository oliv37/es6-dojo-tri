describe('Destructuring ES6', function() {
    
    it('destructuring array', function() {
        const iterable = ['john', 'jack', 'jim'];

        // TODO : à compléter
        const [john,,jim] = iterable;
        
        expect(john).toBe('john');
        expect(jim).toBe('jim');
    });

    it('destructuring object', function() {
        const rectangle = {
            x: 0,
            y: 0,
            width: 10,
            height: 3,
        };

        const { width, height } = rectangle;
        
        expect(width).toBe(10);
        expect(height).toBe(3);
    });

    it('destructuring object in function argument', function() {
        const age = 20;

        const obj = {
            name: 'Jim',
            age
        };

        // TODO : écrire une fonction toString pour faire passer le test suivant
        function toString({name, age}) {
            return `${name.toLowerCase()} is ${age}`;
        }

        // :)
        expect(toString(obj)).toBe('jim is 20');
    });

    it('destructuring array with default values', function() {
        // TODO : écrire une fonction sumFirstTwoValues qui aditionne les deux premiers entiers du tableau
        function sumFirstTwoValues([a = 0, b = 0]) {
            return a + b;
        }

        expect(sumFirstTwoValues([])).toBe(0);
        expect(sumFirstTwoValues([3])).toBe(3);
        expect(sumFirstTwoValues([3, 4])).toBe(7);
        expect(sumFirstTwoValues([6, 2, 5])).toBe(8);
    });

    it('destructuring string', function() {
        // TODO : compléter la ligne suivante pour faire passer le test
        const [firstLetter] = 'abc';

        expect(firstLetter).toBe('a');
    });

    it('destructuring with reference', function() {
        // TODO : compléter la fonction suivante pour faire passer le test
        function sumWithSpecialBehavior([x = 0, y = x]) {
            return x + y;
        }

        expect(sumWithSpecialBehavior([])).toBe(0);
        expect(sumWithSpecialBehavior([0])).toBe(0);
        expect(sumWithSpecialBehavior([1])).toBe(2);
        expect(sumWithSpecialBehavior([2])).toBe(4);
        expect(sumWithSpecialBehavior([6, 3])).toBe(9);
    });

    it('destructuring with default values (difficult)', function() {
        // TODO : compléter la fonction suivante pour faire passer le test
        function getNameOfFirstPerson([{ name = '' } = { name: '' }]) {
            return name;
        }

        expect(getNameOfFirstPerson([])).toBe('');
        expect(getNameOfFirstPerson([{}])).toBe('');
        expect(getNameOfFirstPerson([{name: 'john'}])).toBe('john');
        expect(getNameOfFirstPerson([{name: 'john'}, {name: 'jim'}])).toBe('john');
    });

});