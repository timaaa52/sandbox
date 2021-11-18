function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let tot = classPoints.reduce((a, b) => a + b, 0);
    return (tot / classPoints.length) > yourPoints ? false : true;
}