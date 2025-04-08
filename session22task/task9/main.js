// Tạo một mảng chứa các số nguyên
let numbers = [10, 5, 8, 10, 3, 8, 15, 20, 3, 5];

// Tạo một mảng mới chứa các phần tử duy nhất
let uniqueNumbers = [];

// Duyệt mảng để loại bỏ số trùng nhau
for (let i = 0; i < numbers.length; i++) {
    let exists = false;

    // Kiểm tra xem số numbers[i] đã tồn tại trong uniqueNumbers chưa
    for (let j = 0; j < uniqueNumbers.length; j++) {
        if (numbers[i] === uniqueNumbers[j]) {
            exists = true;
            break;
        }
    }

    // Nếu số đó chưa có trong uniqueNumbers thì thêm vào
    if (!exists) {
        uniqueNumbers.push(numbers[i]);
    }
}

// Sắp xếp mảng uniqueNumbers theo thứ tự tăng dần (Sử dụng thuật toán Bubble Sort)
for (let i = 0; i < uniqueNumbers.length - 1; i++) {
    for (let j = 0; j < uniqueNumbers.length - 1 - i; j++) {
        if (uniqueNumbers[j] > uniqueNumbers[j + 1]) {
            // Hoán đổi giá trị nếu phần tử trước lớn hơn phần tử sau
            let temp = uniqueNumbers[j];
            uniqueNumbers[j] = uniqueNumbers[j + 1];
            uniqueNumbers[j + 1] = temp;
        }
    }
}

// Hiển thị kết quả sau khi loại bỏ trùng và sắp xếp
console.log("Mảng sau khi loại bỏ phần tử trùng nhau và sắp xếp tăng dần:", uniqueNumbers);
