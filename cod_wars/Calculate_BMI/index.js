function bmi(weight, height) {
    let bmi = weight / (height * height);
    if (bmi.toFixed(1) <= 18.5) {
        return 'Underweight';
    } else if (bmi.toFixed(1) <= 25) {
        return 'Normal';
    } else if (bmi.toFixed(1) <= 30) {
        return 'Overweight';
    } else if (bmi.toFixed(1) > 30) {
        return 'Obese';
    }
}