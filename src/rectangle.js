export default class Rectangle {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    static sayHello(name) {
        return `hello ${name}`;
    }

    /* à compléter pour faire passer les tests dans le fichier 8-class.js */
}