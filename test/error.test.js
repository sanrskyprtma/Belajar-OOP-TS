"use strict";
describe('Error Handling', () => {
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.message = message;
        }
    }
    function doubleIt(value) {
        if (value < 0) {
            throw new ValidationError("Value Can't be less than zero");
        }
        return value * 2;
    }
    it('should support', () => {
        try {
            const result = doubleIt(-1);
            console.info(result);
        }
        catch (e) {
            if (e instanceof ValidationError) {
                console.info(e.message);
            }
        }
    });
});
