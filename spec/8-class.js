import Rectangle from '../src/rectangle.js';

describe('class', () => {
    
        it('typeof', () => {
            const A = class { };
            class B {}

            since('error').expect(typeof A).toBe(/* ??? */);
            since('error').expect(typeof B).toBe(/* ??? */);
        });

        it('declaration', () => {
            const Test = class { 
                constructor() {
                    this.a = 3;
                }
                
                get b() {
                    return 4;
                }

                set foo(n) {
                    this.a = n; 
                }
            };

            const t = new Test();
          
            since('error').expect(typeof Test).toBe(/* ??? */);
            since('error').expect(t.a).toBe(/* ??? */);
            since('error').expect(t.b).toBe(/* ??? */);

            t.foo = 5;
            since('error').expect(t.a).toBe(/* ??? */);

        });

        it('rectangle', () => {
            /* TODO : compléter le fichier src/rectangle.js */
            const r = new Rectangle(10, 5);
            
            expect(r.width).toBe(10);
            expect(r.height).toBe(5);
            expect(r.area).toBe(50);
            expect(Rectangle.sayHello('jim')).toBe('hello jim');
        });
});