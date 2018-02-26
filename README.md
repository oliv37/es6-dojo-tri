
# Installation

Exécutez un simple `npm install`

# Exécution
Exécutez un `npm test`

Ouvrez 2 onglets :
- http://localhost:9876 pour l'exécution des test en automatique
- http://localhost:5060 pour voir le résultat des test en livereload

# Documentation

### Modules *(1-import.js / 2-export.js)*

*File1.js*
```javascript
export function test() {
  console.log('test');
}

function privateFunc() {
  console.log('private');
}

export var a = 3;

export default function() {
  console.log('export default from File1');
}
```
\
*File2.js*
```javascript
import { test as myTest, a } from 'File1.js';
import func from 'File1.js';
// import { privateFunc } from 'File1.js' -> erreur la fonction n'a pas été exportée

// test() -> error: test is not defined
myTest(); // affiche 'test'
console.log(a); // affiche 3
func(); // affiche 'export default from File1'
```
### Const / Let *(3-const-let.js)*

```javascript
if (true) {
  const a = 3;
  console.log(a); // 3
  // on ne peut pas écrire : a = 4; 
}

console.log(window.a); // undefined

for(let i of [1, 2, 3, 4]) {
	...
}
console.log(i); // Reference error : i is not defined
```
### Destructuring *(4-destructuring.js)*

*Tableau*
```javascript
const arr = [3, 10, 5];
const [a, ,b] = arr;

console.log(a); // 3
console.log(b); // 5
```

\
*Valeur par défaut*
```javascript
const arr = [3, 10, 7];
const [a, ,b = 5] = arr;
const [c, d = 6] = [11];

console.log(a); // 3
console.log(b); // 7
console.log(c); // 11
console.log(d); // 6
```
\
*Référence une autre variable*
```javascript
const arr = [3, 10, 5];
const [a, ,c = a, d = a] = arr;

console.log(a); // 3
console.log(c); // 5
console.log(d); // 3
```

\
*Avec des objets*
```javascript
const obj = {
  firstName: 'john',
  age: 10
};

const { firstName } = obj;

console.log(firstName); // john
```
```javascript
const obj= {
  firstName: 'john',
  age: 10
};

const { firstName: s } = obj;


console.log(s); // john
console.log(firstName); // not defined
```

```javascript
const obj= {
  firstName: 'john',
  age: 10
};

function printName({ firstName }) {
  console.log(firstName);
}
printName(obj); // john
```

```javascript
function printName({ name, age = 5 }) {
  console.log(name + ' ' + age);
}
printName({ name: 'john' }); // john 5
```
### Spread *(5-spread-rest.js)*

*`...[1, 2, 3]` permet de transformer `[1, 2, 3]` en `1, 2, 3`*

```javascript
const arr = [1, 2, 3];

function func(a, b, c) {
  return a + b + c;
}

console.log(func(...arr)); // 6
// func(...[1, 2, 3]) équivaut à func(1, 2, 3)
```
\
*Concaténation de tableaux*

```javascript
const arr1 = [1, 2];
const arr2 = [4, 5];

const arr3 = [...arr1, 3, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5]
```
```
### Rest

```javascript
function func(...args) {
  return args;
}
  
func(1, 2, 3, 4); // [1, 2, 3, 4];
```

```javascript
function func(a, ...args) {
  console.log(a); // 1
  console.log(args); // [2, 3, 4]
}
  
func(1, 2, 3, 4);
```

*`Destructuring` and `Rest`*

```javascript
const [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]
```
### This *(6-this.js)*

* En ES5, dans le contexte global (et dans un navigateur)
```javascript
this === window // true
this === undefined // true (in strict mode)
```
* En tant que méthode d'un objet, `this` fait référence à l'objet qui est propriétaire de la méthode.
```javascript
var obj = {
  a: 2,
  func: function() {
    return this.a;
  }
};

obj.func() === 2; // true
```
La valeur de `this' dépend du contexte d'exécution de la fonction

```javascript
var obj = {
  a: 2,
  func: function() {
	  return this.a;
  }
};

const fn = obj.func;
fn(); // error Cannot read property 'a' of undefined (en ES6, car this est undefined)
```

### Arrow function *(7-arrow.js)*

Une seule instruction (pas besoin du mot-clé `return`) :
```javascript
const func = () => "foo";
func(); // retourne "foo"
```

Sur plusieurs lignes avec des crochets :
```javascript
const func2 = (param) => {
  const foo = `foo`;
  return foo + param;
};
```

En tant que paramètre d'une fonction (avec un seul argument, pas besoin de parenthèses).
```javascript
const arr = [1,2,3].map(i => i * 2);
console.log(arr); // [2, 4, 6]
```

Les arrow functions ne définissent pas la notion de `this`, ainsi dans une arrow function la valeur de `this` est la même que dans son contexte englobant.

```javascript
const a = {
  c: 5,
  fn: () => this
};

console.log(a.fn()); // undefined
```

```javascript
const a = {
  c: 5,
  fn: function() {
    return this;
  },
  fn2() { return this; }
};

console.log(a.fn() === a); // true
console.log(a.fn2() === a); // true
```
Seul le mot-clé `function` peut définir un nouveau contexte d'exécution.

Pour déterminer la valeur de `this`, il faut regarder dans quel contexte la fonction a été appelée.

**Attention** à l'utilisation de `this` dans les arrow functions

### Classes *(8-class.js)*

```javascript
class Employee {
  constructor(name, firstName) {
    this.name= name;
    this.firstName= firstName;
  }

  get fullName() {
    return this.firstName + ' ' + this.name
  }

  printName() {
    console.log(this.name);
  }

  static fn() {
    console.log('static function');
  }
}

const e = new Employee ('smith', 'john');
console.log(e.name); // smith
console.log(e.fullName); // john smith
e.printName(); // smith
Employee.fn(); // static function
```
écriture des getters/setters avec `get` et `set`

### Autres *(9-class.js)*

* Template string
```javascript
const name = 'JOHN';
console.log(`his name is ${toto.toLowerCase()}`);
// his name is john
```
*Sur plusieurs lignes*
```javascript
const name = 'JOHN';
const content = `
	<div>
		<p>${name}</p>
	</div>
`;
jQuery('#id').html(content);
/*
<div>
   <p>JOHN</p>
</div>
*/
```

* Paramètres par défaut
```javascript
function fn(a = 0, b = 1) {
  return a + b;
}

fn(3, 4); // 7
fn(3); // 4
fn(); // 1

// l'équivalent avec arrow function
const fn = (a = 0, b = 1) => a + b;
```

```javascript
function fn(str, nb = str.length) {
  return str + '!'.repeat(nb);
}

fn('test', 6); // test!!!!!!
fn('test'); // test!!!!

// l'équivalent avec arrow function
const fn = (str, nb = str.length) => str + '!'.repeat(nb);
```

* Filter / Map / Reduce

```javascript
const result = [1, 2, 3]
    .filter(a => a > 1)
    .map(a => a + 1)
    .reduce((acc, curr) => acc + curr, 0);

console.log(result); // 7
```

* Object.assign

```javascript
var obj = {
    a: 2,
    b: 3,
    c: {
	  d: 6
	}
};

var obj2 = Object.assign({}, obj);

obj2.b = 4;
console.log(obj.b); // 3
console.log(obj2.b); // 4

obj2.c.d = 7;

console.log(obj.c.d); // 7
console.log(obj2.c.d); // 7
// Attention pour les propriétés qui correspondent 
// à un objet, c'est la référence qui est copiée
```

* Set
```javascript
let s = new Set()
s.add("hello").add("goodbye").add("hello");
console.log(s.size === 2);
console.log(s.has("hello") === true);

// garde l'ordre d'insertion
for (let key of s.values()) console.log(key);
```

* Map
```javascript
var maMap = new Map();

var objetClé = {},
    fonctionClé = function () {},
    chaineClé = "une chaîne";

// définir les valeurs
maMap.set(chaineClé, "valeur associée à 'une chaîne'");
maMap.set(objetClé, "valeur associée à objetClé");
maMap.set(fonctionClé, "valeur associée à fonctionClé");

maMap.size; // 3

// récupérer les valeurs
maMap.get(chaineClé);    // "valeur associée à 'une chaîne'"
maMap.get(objetClé);     // "valeur associée à objetClé"
maMap.get(fonctionClé);  // "valeur associée à fonctionClé"
```

### Liens

http://mikelambert.me/es6

http://es6-features.org

https://kangax.github.io/compat-table/es6/

https://jsfiddle.net/667vt5y7/34/