function powersOfTwo(n) {
    var results = [];
    for (var i = 0; i <= n; i++) {
        results.push(Math.pow(2, i));
    }
    return results
}