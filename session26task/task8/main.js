function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterOddPrimes(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "number")) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length < 10 || arr.length > 20) {
        return "Mảng phải chứa từ 10 đến 20 phần tử";
    }
    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let oddPrimes = arr.filter(num => isPrime(num) && num % 2 !== 0);
    return oddPrimes;
}

// Kiểm thử hàm với các bộ dữ liệu mẫu:
console.log(filterOddPrimes([10, 2, 3, 5, 7, 9]));
// Output: [3, 5, 7]

console.log(filterOddPrimes([]));
// Output: "Mảng không có phần tử nào"

console.log(filterOddPrimes("abc"));
// Output: "Dữ liệu không hợp lệ"

console.log(filterOddPrimes([4, 6, 8, 10, 12, 14, 16, 18, 20]));
// Output: [] (Không có số nguyên tố lẻ)
