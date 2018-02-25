describe('Const-Let ES6', function() {

    it('if block with var', function() {
        if (true) {
            var toto = 'toto';
        }
        
        since('error').expect(toto).toBe(/* ??? */);
    });

    it('if block with const', function() {
        var toto = "test";

        if (true) {
            const toto = 'toto';
        }
        
        since('error').expect(toto).toBe(/* ??? */);
    });

    it('if block with let', function() {
        var toto = "test";

        {
            let toto = 'toto';
        }
        
        since('error').expect(toto).toBe(/* ??? */);
    });

    it('for block with var', function() {
        var i = -1, j = -2;

        for(var i of [1, 2 ,3]) {
            var j = i;
        }

        since('error i').expect(i).toBe(/* ??? */);
        since('error j').expect(j).toBe(/* ??? */);
    });

    it('for block with let and function', function() {
        const arr = [];
        
        for (let i = 0; i <= 2; i++) {
            arr[i] = function () { return i * 2 }
        }
        
        since('error arr[0]').expect(arr[0]()).toBe(/* ??? */);
        since('error arr[1]').expect(arr[1]()).toBe(/* ??? */);
        since('error arr[2]').expect(arr[2]()).toBe(/* ??? */);
    });

    it('for block with var and function', function() {
        const arr = [];

        for (var i = 0; i <= 2; i++) {
            arr[i] = function () { return i * 2 }
        }

        since('error arr[0]').expect(arr[0]()).toBe(/* ??? */);
        since('error arr[1]').expect(arr[1]()).toBe(/* ??? */);
        since('error arr[2]').expect(arr[2]()).toBe(/* ??? */);
    });

    it('for block with let declaration outside for loop', function() {
        const arr = [];
        
        let i;

        for (i = 0; i <= 2; i++) {
            arr[i] = function () { return i * 2 }
        }
        
        since('error arr[0]').expect(arr[0]()).toBe(/* ??? */);
        since('error arr[1]').expect(arr[1]()).toBe(/* ??? */);
        since('error arr[2]').expect(arr[2]()).toBe(/* ??? */);
    });
    
    it('for block with let', function() {
        var i = -1, j = -2;

        for(let i of [1, 2 ,3]) {
            const j = i;
        }

        since('error i').expect(i).toBe(/* ??? */);
        since('error j').expect(j).toBe(/* ??? */);
    });

    it('const object', function() {
        const obj = {
            a: 1,
            b: 2
        };

        obj.a = 3;

        since('error').expect(obj.a).toBe(/* ??? */);
    });

});