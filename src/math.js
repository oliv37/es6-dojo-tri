export function add(...args) {
    return args.reduce(function(acc, curr) {
        return acc + curr;
    });
}

export function substract(a, b) {
    return a - b;
}

function greeting() {
    return `Hello from math.js`;
}

export default greeting;
