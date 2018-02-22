# Installation

Exécutez un simple `npm install`

# Exécution
Exécutez un `npm test`

Ouvrez 2 onglets :
- http://localhost:9876 pour l'exécution des test en automatique
- http://localhost:5060 pour voir le résultat des test en livereload

# Documentation

### __Modules__

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
### Const / Let

```javascript
if (true) {
  const a = 3;
  console.log(a); // 3
  // on ne peut écrire : a = 4; 
}

console.log(a); // undefined

for(let i of [1, 2, 3, 4]) {
	...
}
console.log(i); // undefined
```
### Destructuring

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
const [a, ,b = a] = arr;

console.log(a); // 3
console.log(b); // 3
```

\
*Avec des objets*
```javascript
const obj= {
  name: 'john'
  age: 10
};
const { name } = obj;

console.log(name); // john
```


```javascript
const obj= {
  name: 'john'
  age: 10
};
const { name: s } = obj;

console.log(name); // undefined
console.log(s); // john
```

```javascript
const obj= {
  name: 'john',
  age: 10
};

function printName({ name }) {
  console.log(name);
}
printName(obj); // john
```

```javascript
function printName({ name, age = 5 }) {
  console.log(name + ' ' + age);
}
printName({ name: 'john' }); // john 5
```
### Spread

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

*`...{a: 1,b: 4}` permet de transformer `{a: 1,b: 4}` en `a: 1,b: 4`*

```javascript
const obj1 = {a: 1, b: 4};
const obj2 = {...obj1, c: 2};
console.log(obj2); // {a: 1, b: 4, c: 2}

const obj3 = {...obj1, a: 2};
console.log(obj2); // {a: 2, b: 4}
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

```javascript
const obj = {a: 2, b: 4, c: 10};
const {b, ...rest} = obj;
console.log(b); // 4
console.log(rest); // {a: 2, c: 10}
```
### This

* Dans le contexte global (et dans un navigateur)
```javascript
this === window // true
```
* En tant que méthode d'un objet, `this` fait référence à l'objet (qui est lui-même propriétaire de la méthode)
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
fn(); // false
```

### Arrow function

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

En tant que paramètre d'une fonction (avec un seul argument, pas besoin de parenthèses)
```javascript
const arr = [1,2,3].forEach(i => i * 2);
console.log(arr); // [2, 4, 6]
```

Les arrow functions ne définisse pas la notion de `this`, ainsi dans une arrow function `this` fait référence au contexte englobant

The this value inside an arrow function is the same as the this value outside of it.


```javascript
const a = {
  c: 5,
  fn: () => this.c
};

console.log(a.fn()); // undefined
```

```javascript
const a = {
  c: 5,
  fn: function(){ return this.c; }
};

console.log(a.fn()); // 5
```
Seul le mot-clé`function` définit un nouveau contexte d'exécution.
Pour déterminer la valeur de `this`, il faut regarder dans quel contexte la fonction a été appelée.

**Attention** à l'utilisation de `this` dans les arrow functions

### Classes

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
}

const e = new Employee ('smith', 'john');
console.log(e.name); // smith
console.log(e.fullName); // john smith
e.printName(); // smith
```
Possibilité d'écrire les getters/setters avec `get` et `set`

### Autres

* Paramètres par défaut
```javascript
function fn(a = 0, b = 1) {
  return a + b;
}

fn(3, 4); // ????
fn(3); // ????
fn(); // ????

// l'équivalent avec arrow function
const fn = (a = 0, b = 0) => a + b;
```

```javascript
function fn(str, nb = str.length) {
  return str + '!'.repeat(nb);
}

fn('test', 6); // ????
fn('test'); // ????

// l'équivalent avec arrow function
const fn = (str, nb = str.length) => str + '!'.repeat(nb);
```
