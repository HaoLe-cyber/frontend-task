function chunkArray(arr, n) {
    if (!Array.isArray(arr) || typeof n !== 'number' || n <= 0) {
        return "Dữ liệu không hợp lệ";
    }

    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result;
}

// Test case
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(chunkArray([10, 20, 30, 40, 50], 2));7
console.log(chunkArray("abc", 2)); // "Dữ liệu không hợp lệ"
