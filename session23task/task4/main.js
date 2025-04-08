// Nhập số phần tử của mảng
let n = +prompt("Nhập số phần tử của mảng:");
let arr = [];
let numArr = [];

// Nhập các ký tự vào mảng
for (let i = 0; i < n; i++) {
    let char = prompt(`Nhập ký tự thứ ${i + 1}:`);
    arr.push(char);

    // Kiểm tra nếu là ký tự số (0-9)
    if (char >= '0' && char <= '9') {
        numArr.push(char);
    }
}

// Hiển thị kết quả
alert("Mảng đã nhập: " + arr.join(", "));
alert("Mảng các ký tự số trong mảng là: " + (numArr.length > 0 ? numArr.join(", ") : "Không có ký tự số nào"));
