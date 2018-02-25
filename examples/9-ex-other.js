// Object assign (cloner un objet, pour les propriétés qui correspondent à un objet, c'est uniquement
// la référence qui est copiée)

var obj = {
    a: 2,
    b: 3
};

var obj2 = obj;
obj2.b = 4;
console.log(obj.b);

//
var obj = {
    a: 2,
    b: 3
};

var obj2 = Object.assign({}, obj);

obj2.b = 4;

console.log(obj.b);
console.log(obj2.a);
console.log(obj2.b);

//
var obj = {
    a: 2,
    b: 3
};

var obj2 = Object.assign({}, obj, {b: 4, c: 3});
console.log(obj2);

// Set
let s = new Set()
s.add("hello").add("goodbye").add("hello")
console.log(s.size === 2)
console.log(s.has("hello") === true)

// insertion order
for (let key of s.values()) console.log(key)

// Map
const maMap = new Map();

const objetClé = {},
    fonctionClé = function () {},
    chaineClé = "une chaîne";

maMap.set(chaineClé, "valeur associée à 'une chaîne'");
maMap.set(objetClé, "valeur associée à objetClé");
maMap.set(fonctionClé, "valeur associée à fonctionClé");

console.log(maMap.size);

console.log(maMap.get(chaineClé));
console.log(maMap.get(objetClé));
console.log(maMap.get(fonctionClé));

for(let entry of maMap.entries()) {
    console.log(entry);
}