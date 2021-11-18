function squareSum(numbers) {
    return numbers.map(number => number ** 2).reduce((a, b) => a + b, 0)
}