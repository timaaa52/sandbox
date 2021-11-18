function find_average(array) {
    const result = array.reduce((a, b) => a + b, 0)
    const totalItems = array.length
    return array.length > 0 ? result / totalItems : 0
}