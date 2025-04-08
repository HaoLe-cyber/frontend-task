function sortEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    // Lọc và sắp xếp các số chẵn theo thứ tự tăng dần
    let evenNumbers = arr.filter(num => num % 2 === 0).sort((a, b) => a - b);

    // Duyệt qua mảng ban đầu và thay thế các số chẵn đã sắp xếp
    let evenIndex = 0;
    return arr.map(num => num % 2 === 0 ? evenNumbers[evenIndex++] : num);
}

// Test cases
console.log(sortEvenNumbers([5, 3, 2, 8, 1, 4]));
console.log(sortEvenNumbers([10, 7, 6, 3, 2]));
console.log(sortEvenNumbers([1, 9, 3, 7]));
console.log(sortEvenNumbers([]));
console.log(sortEvenNumbers("abc"));
