let n = +prompt("Nhập số nguyên n:");
let count = 0; // Đếm số lượng số nguyên tố đã tìm được
let num = 2; // Bắt đầu kiểm tra từ số 2
let result = "Các số nguyên tố đầu tiên là: ";

while (count < n) {
    let isPrime = true; // Giả sử num là số nguyên tố

    for (let i = 2; i <= Math.sqrt(num); i++) { // Kiểm tra từ 2 đến căn bậc hai của num
        if (num % i === 0) {
            isPrime = false; // Nếu num chia hết cho i, nó không phải số nguyên tố
            break;
        }
    }

    if (isPrime) {
        result += num + " "; // Thêm số nguyên tố vào chuỗi kết quả
        count++; // Tăng số lượng số nguyên tố đã tìm thấy
    }

    num++; // Kiểm tra số tiếp theo
}

alert(result);
