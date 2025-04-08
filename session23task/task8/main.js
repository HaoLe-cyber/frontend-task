// Nhập số phần tử của mảng
let n = +prompt("Nhập số lượng phần tử của mảng:");
let arr = [];

// Nhập các phần tử vào mảng
for (let i = 0; i < n; i++) {
    arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}:`);
}

// Kiểm tra nếu mảng có ít hơn 3 phần tử
if (n < 3) {
    console.log("Mảng cần ít nhất 3 phần tử để kiểm tra Fibonacci.");
} else {
    // Biến kiểm tra Fibonacci
    let isFibonacci = true;

    // Kiểm tra quy luật Fibonacci
    for (let i = 2; i < n; i++) {
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            isFibonacci = false;
            break;
        }
    }

    // Xuất kết quả
    if (isFibonacci) {
        console.log("Mảng là một dãy Fibonacci.");
    } else {
        console.log("Mảng KHÔNG phải là một dãy Fibonacci.");
    }
}
