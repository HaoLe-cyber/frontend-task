let num = +prompt("Nhập một số nguyên bất kỳ:");
let isPrime = true;

if (num <= 1) {
    isPrime = false; // Số nguyên tố phải lớn hơn 1
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) { // Chỉ kiểm tra đến căn bậc hai của num
        if (num % i === 0) {
            isPrime = false;
            break; // Nếu tìm thấy ước số, dừng vòng lặp ngay
        }
    }
}

if (isPrime) {
    alert(num + " là số nguyên tố.");
} else {
    alert(num + " không phải là số nguyên tố.");
}
