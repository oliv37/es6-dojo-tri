export const number = 3;

export function add(a, b) {
    return a + b;
}

function privateFn() {
    console.log('not exported');
}

export default function(a, b) {
    return a * b;
};
