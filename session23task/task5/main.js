// Nhập số phần tử của mảng
let n = +prompt("Nhập số phần tử của mảng:");
let arr = [];
let sum = 0;

// Nhập các ký tự vào mảng
for (let i = 0; i < n; i++) {
    let char = prompt(`Nhập ký tự thứ ${i + 1}:`);
    arr.push(char);

    // Kiểm tra nếu là ký tự số (0-9) thì cộng vào tổng
    if (char >= '0' && char <= '9') {
        sum += +char; // Ép kiểu sang số và cộng vào tổng
    }
}

// Hiển thị kết quả
alert("Mảng đã nhập: " + arr.join(", "));
alert("Tổng các ký tự số trong mảng là: " + sum);
