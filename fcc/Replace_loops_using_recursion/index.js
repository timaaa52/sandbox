function sum(arr, n) {
    // Only change code below this line
    return --n < 0 ? 0 : sum(arr, n) + arr[n]
        // Only change code above this line
}