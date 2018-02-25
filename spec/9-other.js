describe('other', () => {
    
        it('template string', () => {
            const name = 'JACK';
            const age = 20; 

            // TODO : à compléter
            const str = `${name.toLocaleLowerCase()} is ${age + 2} years old`;

            expect(str).toBe('jack is 22 years old');
        });

        
        it('object assign', () => {
            const obj = { a: 2, b: 4 };

            const obj2 = Object.assign({}, obj);
            since('error obj === obj2').expect(obj === obj2).toBeFalsy();
            since('error obj2["a"]').expect(obj2['a']).toBe(2);
            since('error obj2.b').expect(obj2.b).toBe(4);

            const obj3 = Object.assign({}, obj, {a: 3});

            since('error obj3["a"]').expect(obj3['a']).toBe(3);
            since('error obj3["b"]').expect(obj3['b']).toBe(4);

            const a = 'a';
            const obj4 = Object.assign({}, {a: 3}, obj);
            since('error obj4[a]').expect(obj4[a]).toBe(2);
            since('error obj4["b"]').expect(obj4['b']).toBe(4);

            const obj5 = Object.assign(obj, {a: 3});
            since('error obj === obj5').expect(obj === obj5).toBeTruthy();
            since('error obj5.a').expect(obj5.a).toBe(3);
            since('error obj5["b"]').expect(obj5['b']).toBe(4);
        });

        it('bind', () => {
            function add(a, b) {
                return a + b;
            }

            const fn = add.bind(null, 2);

            since('error').expect(fn(0)).toBe(2);
            since('error').expect(fn(3)).toBe(5);
            since('error').expect(fn(5)).toBe(7);
        });

        it('map reduce', () => {
            // TODO : écrire une fonction fn qui doit prendre un nombre indéterminé de chaînes de caractères
            // en entrée, qui extrait la première lettre de chacune d'elles et qui retourne la concaténation
            // de ces lettres
            const fn = (...args) => args
                .map((([firstLetter]) => firstLetter))
                .reduce((acc, curr) => acc + curr, '');

            expect(fn()).toBe('');
            expect(fn('Zuul')).toBe('Z');
            expect(fn("Hello", "arrow", "functions")).toBe('Haf');
            expect(fn("foo", "bar", "jim", "paul")).toBe('fbjp');
        });

        it('average', () => {
            // TODO : compléter la fonction average qui accepte un nombre indéterminé de chiffre 
            // en entrée et qui retourne la moyenne, la fonction retourne 0 s'il n'y a aucun paramètres
            const average = (...numbers) => {
                const sum = numbers.reduce((acc, curr) => acc + curr, 0);
                return sum / numbers.length;
            }

            expect(average()).toBeNaN();
            expect(average(4)).toBe(4);
            expect(average(4, 6, 11)).toBe(7);
            expect(average(1, 2, 5, 2)).toBe(2.5);
        });

        it('count words', () => {
            // TODO : écrire une fonction countWords qui prend en paramètre un nombre indéterminé de chaînes de caractères
            // la fonction doit retourner un objet qui contient le nombre de d'occurences de chaque mot.
            // :)
            const countwords = (...words) => words.reduce((acc, curr) => {
                acc[curr] = acc[curr] + 1 || 1;
                return acc;
            }, {});

            expect(countwords('Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian')).toEqual({
                Apple: 2,
                Banana: 1,
                Durian: 3
            });
        });

});