// Khai báo mảng số nguyên gồm 10 phần tử có sẵn
let numbers = [25, 10, 5, 30, 15, 20, 50, 40, 35, 45];

// Sắp xếp mảng theo thứ tự tăng dần bằng thuật toán sắp xếp nổi bọt (Bubble Sort)
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            // Hoán đổi giá trị nếu phần tử trước lớn hơn phần tử sau
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

// Hiển thị kết quả
console.log("Mảng sau khi sắp xếp tăng dần:", numbers);
