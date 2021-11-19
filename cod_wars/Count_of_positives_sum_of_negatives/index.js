function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return []

    const positives = input
        .filter(number => Math.sign(number) === 1)
        .reduce(a => a + 1, 0)

    const negatives = input
        .filter(number => Math.sign(number) === -1)
        .reduce((a, b) => a + b, 0)

    return [positives, negatives]
}