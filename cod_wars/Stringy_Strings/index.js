function stringy(size) {
    // your code here  

    return Array.from(Array(size), (el, i) => (i % 2 === 0 ? 1 : 0)).join('')
}