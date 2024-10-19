describe('Relationship', () =>{

    class Person {
        constructor(public name: string){

        }
    }

    class Customer {
        constructor(public name: string){
            
        }
    }
    it('it should support', () =>{
        const person : Person = new Customer("Eko");
    });
}); 