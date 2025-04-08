function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterPrimes(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    let primeNumbers = arr.filter(num => Number.isInteger(num) && isPrime(num));

    return primeNumbers.length > 0 ? primeNumbers : "Mảng không có phần tử nào";
}

// Kiểm thử hàm với các bộ dữ liệu mẫu:
console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Output: [2, 3, 5, 7]

console.log(filterPrimes([]));
// Output: "Mảng không có phần tử nào"

console.log(filterPrimes("abc"));
// Output: "Dữ liệu không hợp lệ"
