describe('Const-Let ES6', function() {

    it('if block with var', function() {
        if (true) {
            var toto = 'toto';
        }
        
        since('error').expect(toto).toBe('toto');
    });

    it('if block with const', function() {
        var toto = "test";

        if (true) {
            const toto = 'toto';
        }
        
        expect(toto).toBe('test');
    });

    it('if block with let', function() {
        var toto = "test";

        if (true) {
            let toto = 'toto';
        }
        
        expect(toto).toBe('test');
    });

    it('for block with var', function() {
        var i = -1, j = -2;

        for(var i of [1, 2 ,3]) {
            var j = i;
        }

        since('error').expect(i).toBe(3);
        since('error').expect(j).toBe(3);
    });
    
    it('for block with let', function() {
        var i = -1, j = -2;

        for(let i of [1, 2 ,3]) {
            const j = i;
        }

        since('error').expect(i).toBe(-1);
        since('error').expect(j).toBe(-2);
    });

    it('const object', function() {
        const obj = {
            a: 1,
            b: 2
        };

        obj.a = 3;

        since('error').expect(obj.a).toBe(3);
    });

});