// Nhập vào số lượng phần tử của mảng
let n = +prompt("Nhập số lượng phần tử của mảng:");
let arr = [];

// Nhập các phần tử vào mảng
for (let i = 0; i < n; i++) {
    arr[i] = +prompt(`Nhập phần tử thứ ${i + 1}:`);
}

// Kiểm tra nếu mảng có ít hơn 2 phần tử
if (n < 2) {
    console.log("Mảng cần ít nhất 2 phần tử để tìm số lớn thứ hai.");
} else {
    // Khởi tạo giá trị max và secondMax
    let max = -Infinity;
    let secondMax = -Infinity;

    // Duyệt mảng để tìm max
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }
    }

    // Kiểm tra nếu không tìm thấy số lớn thứ hai
    if (secondMax === -Infinity) {
        console.log("Không có số lớn thứ hai trong mảng.");
    } else {
        console.log("Số lớn thứ hai trong mảng là:", secondMax);
    }
}
