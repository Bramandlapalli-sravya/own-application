const arr = [2, 7, 11, 15];
let sum = 0;
const target = 13;
let found = false;
let map = new Map();

// without optimization

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            sum = arr[i] + arr[j];
            if (sum === target) {
                console.log(i, j);
                found = true;
            }
        }
    }

    if (found) break;
}

// with optimization

console.log(map, 'intital-map');

for (let i = 0; i < arr.length; i++) {
    let findAnotherNum = target - arr[i];
    if (map.has(findAnotherNum)) {
        console.log('found',);
        console.log(map.get(findAnotherNum), i);
        found = true;
    }
    map.set(arr[i], i);
}

console.log(map, 'after-map');



