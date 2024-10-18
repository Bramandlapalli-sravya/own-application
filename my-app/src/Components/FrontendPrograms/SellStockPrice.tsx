let arr = [7, 1, 5, 3, 6, 4];
let maxValue = 0;

let map = new Map();

//without optimization
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        let currentDiff = arr[j] - arr[i];
        console.log(currentDiff);
        if (currentDiff > maxValue) {
            maxValue = currentDiff;
        }
    }

}
console.log(maxValue);

// with optimization
let max = 0;
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    let newValue = arr[i] - min;
    console.log(newValue, 'newValue');
    if (newValue > max) {
        max = newValue;
        console.log(max, 'max');
    }

    if (arr[i] < min) {
        min = arr[i];
        console.log(min, 'min');
    }
}
console.log(max);
