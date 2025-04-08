function sumEvenOdd(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "number")) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length < 10 || arr.length > 20) {
        return "Mảng phải chứa từ 10 đến 20 phần tử";
    }
    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let totalEven = arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    let totalOdd = arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);

    return `totalEven = ${totalEven}\ntotalOdd = ${totalOdd}`;
}

// 🛠️ Kiểm thử hàm với các bộ dữ liệu mẫu:
console.log(sumEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// Output:

console.log(sumEvenOdd([]));
// Output: "Mảng không có phần tử nào"

console.log(sumEvenOdd("abc"));
// Output: "Dữ liệu không hợp lệ"

console.log(sumEvenOdd([4, 6, 8, 10, 12, 14, 16, 18, 20]));
// Output:

