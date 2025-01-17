describe('Polymorphism', () => {

    class Employee {
        constructor(public name: string){

        }
    }

    class Manager extends Employee{

    }

    class VicePresident extends Manager {

    }

    function sayHello(employee: Employee): void {
        if(employee instanceof VicePresident){
            const vicepresident = employee as VicePresident;
            console.info(`Hello VicePresident ${vicepresident.name}`);
        }else if(employee instanceof Manager){
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`);
        }else{
            console.info(`Hello employee ${employee.name}`);
        }
    }

    it('should support', () => {
        let employee: Employee = new Employee("Eko");
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