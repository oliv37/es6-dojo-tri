describe('other', () => {
    
        it('template string', () => {
            const name = 'JACK';
            const age = 20; 

            // TODO : à compléter
            // const str = ...

            expect(str).toBe('jack is 22 years old');
        });

        it('bind', () => {
            function add(a, b) {
                return a + b;
            }

            const fn = add.bind(null, 2);

            since('error').expect(fn(0)).toBe(/* ??? */);
            since('error').expect(fn(3)).toBe(/* ??? */);
            since('error').expect(fn(5)).toBe(/* ??? */);
        });

        it('map reduce', () => {
            // TODO : écrire une fonction fn qui doit prendre un nombre indéterminé de chaînes de caractères
            // en entrée, qui extrait la première lettre de chacune d'elles et qui retourne la concaténation
            // de ces lettres

            expect(fn()).toBe('');
            expect(fn('Zuul')).toBe('Z');
            expect(fn("Hello", "arrow", "functions")).toBe('Haf');
            expect(fn("foo", "bar", "jim", "paul")).toBe('fbjp');
        });

        it('average', () => {
            // TODO : compléter la fonction average qui accepte un nombre indéterminé de chiffre 
            // en entrée et qui retourne la moyenne, la fonction retourne 0 s'il n'y a aucun paramètres

            expect(average()).toBeNaN();
            expect(average(4)).toBe(4);
            expect(average(4, 6, 11)).toBe(7);
            expect(average(1, 2, 5, 2)).toBe(2.5);
        });

        it('count words', () => {
            // TODO : écrire une fonction countWords qui prend en paramètre un tableau de chaînes de caractères
            // la fonction doit retourner un objet qui contient le nombre de d'occurences de chaque mot.

            expect(countwords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'])).toEqual({
                Apple: 2,
                Banana: 1,
                Durian: 3
            });
        });

});