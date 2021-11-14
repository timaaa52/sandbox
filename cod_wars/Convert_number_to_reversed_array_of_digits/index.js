function digitize(n) {
    //code here
    return String(n).split('').reverse().map(b => Number(b))
}