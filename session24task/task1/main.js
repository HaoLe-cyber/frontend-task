let numbers = []; // Mảng chứa số nguyên
let choice; // Biến lưu lựa chọn người dùng

do {
    // Hiển thị menu
    choice = +prompt(
        `========= MENU =========
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất
4. Tính tổng các phần tử
5. Tìm số lần xuất hiện của một phần tử
6. Sắp xếp mảng tăng dần
7. Thoát
=========================
Lựa chọn của bạn:`
    );

    switch (choice) {
        case 1:
            // Nhập mảng
            let n = +prompt("Nhập số lượng phần tử của mảng:");
            numbers = [];
            for (let i = 0; i < n; i++) {
                numbers[i] = +prompt(`Nhập phần tử thứ ${i + 1}:`);
            }
            alert("Đã nhập mảng thành công!");
            break;

        case 2:
            // Hiển thị mảng
            if (numbers.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                alert("Mảng hiện tại: " + numbers.join(", "));
            }
            break;

        case 3:
            // Tìm phần tử lớn nhất và nhỏ nhất
            if (numbers.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let max = numbers[0], min = numbers[0];
                for (let i = 1; i < numbers.length; i++) {
                    if (numbers[i] > max) max = numbers[i];
                    if (numbers[i] < min) min = numbers[i];
                }
                alert(`Phần tử lớn nhất: ${max}\nPhần tử nhỏ nhất: ${min}`);
            }
            break;

        case 4:
            // Tính tổng các phần tử
            if (numbers.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let sum = 0;
                for (let i = 0; i < numbers.length; i++) {
                    sum += numbers[i];
                }
                alert("Tổng các phần tử trong mảng: " + sum);
            }
            break;

        case 5:
            // Tìm số lần xuất hiện của một phần tử
            if (numbers.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let numToFind = +prompt("Nhập số cần đếm:");
                let count = 0;
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] === numToFind) count++;
                }
                alert(`Số ${numToFind} xuất hiện ${count} lần.`);
            }
            break;

        case 6:
            // Sắp xếp mảng tăng dần
            if (numbers.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                for (let i = 0; i < numbers.length - 1; i++) {
                    for (let j = i + 1; j < numbers.length; j++) {
                        if (numbers[i] > numbers[j]) {
                            let temp = numbers[i];
                            numbers[i] = numbers[j];
                            numbers[j] = temp;
                        }
                    }
                }
                alert("Mảng sau khi sắp xếp tăng dần: " + numbers.join(", "));
            }
            break;

        case 7:
            // Thoát chương trình
            alert("Chương trình kết thúc!");
            break;

        default:
            alert("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 7.");
    }
} while (choice !== 7);
