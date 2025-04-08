function findMissingNumber(arr) {
    let n = arr.length + 1; // Số phần tử đúng nếu không thiếu số nào
    let expectedSum = (n * (arr[0] + arr[arr.length - 1])) / 2; // Tổng của dãy đầy đủ
    let actualSum = arr.reduce((sum, num) => sum + num, 0); // Tổng của mảng hiện tại

    return expectedSum - actualSum; // Số bị thiếu
}

// Test cases
console.log(findMissingNumber([1, 2, 3, 4, 6]));
console.log(findMissingNumber([10, 11, 12, 14]));
console.log(findMissingNumber([100, 101, 103, 104]));
