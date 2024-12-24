const solution = numbers => {
    let firstNumber = 0;
    let firstIndex = 0;
    let secondNumber = 0;
    numbers.forEach((number, index) => {
        if (firstNumber < number) {
            firstNumber = number;
            firstIndex = index;
        }
    })
    
    const newNumbers = numbers.filter((_, index) => index !== firstIndex)
    newNumbers.forEach(number => {
        if (secondNumber < number) {
            secondNumber = number;
        }
    })
                    
    return firstNumber * secondNumber;
}