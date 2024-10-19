describe('Instance Of', () => {
        class Employee {}
        class Manager {} 

        const budi = new Employee;
        const eko = new Manager;
    it('should have problem using typeof', () => {
        
        console.info(typeof budi);
        console.info(typeof eko);
    });

    it('should support instance of', () => {
        expect(budi instanceof Employee).toBe(true);
        expect(budi instanceof Employee).toBe(false);

        expect(eko instanceof Employee).toBe(false);
        expect(eko instanceof Employee).toBe(true);

    });
});