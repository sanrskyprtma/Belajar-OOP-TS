"use strict";
describe('inheritance', () => {
    //parent class
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class Director extends Manager {
    }
    it('should support', () => {
        const employee = new Employee("Eko");
        console.info(employee.name);
        const manager = new Manager("Budi");
        console.info(manager.name);
        const director = new Director("Jhon");
        console.info(director.name);
    });
});
