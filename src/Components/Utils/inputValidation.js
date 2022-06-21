export const validateInputToBewholeNumber = (inputValue) => {
    if (inputValue < 0 || inputValue > 10 || isNaN(inputValue) === true || inputValue % 1 !== 0) {
            return false;
    }else{
        return true;
    }
};