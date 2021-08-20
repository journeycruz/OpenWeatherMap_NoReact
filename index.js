const input = require('./input');

console.log(input);

function mean(arr) {
    let total = 0,
        i;
    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
};

function median(arr) {
    const mid = arr.length / 2,
        nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

function mode(arr) {
    let frequency = [];
    let maxFreq = 0;
    let modes = [];

    for (i = 0; i < arr.length; i++) {
        frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
        if (frequency[arr[i]] > maxFreq) {
            maxFreq = frequency[arr[i]];
        }
    };

    for (k = 0; k < arr.length; k++) {
        if (frequency[k] == maxFreq) {
            modes.push(k);
        }
    };

    return modes;
};

console.log('Temperature forecast for the next three days in Lafayette (Farenheit): ' + input.numbers);
console.log('Mean Temp: ' + mean(input.numbers));
console.log('Median Temp: ' + median(input.numbers));
console.log('Mode(s): ' + mode(input.numbers));