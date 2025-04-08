// Khai báo mảng rỗng
let numbers = [];

// Nhập 10 phần tử khác nhau vào mảng
while (numbers.length < 10) {
    let num = +prompt(`Nhập số nguyên thứ ${numbers.length + 1} (không trùng lặp):`);

    // Kiểm tra số đã tồn tại trong mảng chưa
    let exists = false;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === num) {
            exists = true;
            break;
        }
    }

    // Nếu số chưa có trong mảng thì thêm vào
    if (!exists) {
        numbers.push(num);
    } else {
        alert("Số đã tồn tại trong mảng, vui lòng nhập số khác!");
    }
}

// Tìm giá trị lớn nhất và vị trí của nó
let max = numbers[0];
let maxIndex = 0;

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
        maxIndex = i;
    }
}

// Hiển thị kết quả
alert("Mảng bạn đã nhập: " + numbers.join(", "));
alert("Phần tử lớn nhất là: " + max + " tại vị trí " + maxIndex);
