"use strict";
describe('Polymorphism', () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class VicePresident extends Manager {
    }
    function sayHello(employee) {
        if (employee instanceof VicePresident) {
            const vicepresident = employee;
            console.info(`Hello VicePresident ${vicepresident.name}`);
        }
        else if (employee instanceof Manager) {
            const manager = employee;
            console.info(`Hello manager ${manager.name}`);
        }
        else {
            console.info(`Hello employee ${employee.name}`);
        }
    }
    it('should support', () => {
        let employee = new Employee("Eko");
        console.info(employee);
        employee = new Manager("Eko");
        console.info(employee);
        employee = new VicePresident("Eko");
        console.info(employee);
    });
    it('should support method parameter polymorphism', () => {
        sayHello(new Employee("Eko"));
        sayHello(new Manager("Budi"));
        sayHello(new VicePresident("Jhon"));
    });
});
