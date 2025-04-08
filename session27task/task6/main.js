function isArithmeticSequence(arr) {
    if (arr.length < 2) return true; // Mảng có 0 hoặc 1 phần tử luôn là cấp số cộng

    let diff = arr[1] - arr[0]; // Khoảng cách giữa 2 phần tử đầu tiên

    return arr.every((num, index) => index === 0 || num - arr[index - 1] === diff);
}

// Test cases
console.log(isArithmeticSequence([2, 4, 6, 8, 10]));
console.log(isArithmeticSequence([3, 6, 9, 12]));
console.log(isArithmeticSequence([1, 3, 6, 9]));
console.log(isArithmeticSequence([5]));
console.log(isArithmeticSequence([]));