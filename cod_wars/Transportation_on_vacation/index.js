function rentalCarCost(d) {
    // Your solution here
    if (d < 3) {
        return 40 * d
    } else if (d >= 3 && d < 7) {
        return (40 * d) - 20;
    } else if (d >= 7) {
        return (40 * d) - 50;
    }
}