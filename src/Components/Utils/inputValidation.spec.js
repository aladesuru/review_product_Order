import {validateInputToBewholeNumber} from './inputValidation';

describe('should check if the input value is a whole number and between 1 to 10', () => {
    it('should check if the input value is a whole number', () => {
        const result  = validateInputToBewholeNumber(8);
        expect(result).toEqual(true);
    });
    it('should check if input value not whole number', () => {
        const result  = validateInputToBewholeNumber(7.8);
        expect(result).toEqual(false);
    })
    it('should check if input value greater than 10', () => {
        const result  = validateInputToBewholeNumber(11);
        expect(result).toEqual(false);
    })

})