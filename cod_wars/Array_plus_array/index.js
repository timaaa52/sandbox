function arrayPlusArray(arr1, arr2) {
    //something went wrong
    let a = arr1.reduce((a, b) => a + b, 0);
    let b = arr2.reduce((a, b) => a + b, 0);
    return a + b
}