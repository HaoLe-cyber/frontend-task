function processArray(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "number")) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let squaredEvenNumbers = arr
        .map(num => num ** 2) // Bình phương tất cả các phần tử
        .filter(num => num % 2 === 0); // Lọc ra số chẵn

    return squaredEvenNumbers;
}

// Kiểm thử hàm với các bộ dữ liệu mẫu:
console.log(processArray([2, 5, 10]));
// Output: [4, 100]

console.log(processArray([]));
// Output: "Mảng không có phần tử nào"

console.log(processArray("abc"));
// Output: "Dữ liệu không hợp lệ"

console.log(processArray([1, 3, 5]));
// Output: [] (Không có số chẵn sau khi bình phương)
