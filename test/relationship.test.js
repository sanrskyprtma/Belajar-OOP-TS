"use strict";
describe('Relationship', () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Customer {
        constructor(name) {
            this.name = name;
        }
    }
    it('it should support', () => {
        const person = new Customer("Eko");
    });
});
