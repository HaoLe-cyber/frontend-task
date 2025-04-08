let numbers = []; // Mảng số nguyên
let choice; // Biến lưu lựa chọn người dùng

do {
    // Hiển thị menu
    choice = +prompt(
        `========= MENU =========
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát
=========================
Lựa chọn của bạn:`
    );

    switch (choice) {
        case 1:
            // Nhập mảng số nguyên
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
            // Tìm các phần tử chẵn và lẻ
            if (numbers.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let evenNumbers = "";
                let oddNumbers = "";
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] % 2 === 0) {
                        evenNumbers += numbers[i] + " ";
                    } else {
                        oddNumbers += numbers[i] + " ";
                    }
                }
                alert(`Số chẵn: ${evenNumbers.trim()}\nSố lẻ: ${oddNumbers.trim()}`);
            }
            break;

        case 4:
            // Tính trung bình cộng của mảng
            if (numbers.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let sum = 0;
                for (let i = 0; i < numbers.length; i++) {
                    sum += numbers[i];
                }
                let average = sum / numbers.length;
                alert("Trung bình cộng của mảng: " + average.toFixed(2));
            }
            break;

        case 5:
            // Xóa phần tử tại vị trí chỉ định
            if (numbers.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let index = +prompt("Nhập vị trí phần tử cần xóa (bắt đầu từ 0):");
                if (index >= 0 && index < numbers.length) {
                    let removedValue = numbers.splice(index, 1);
                    alert(`Đã xóa phần tử ${removedValue} tại vị trí ${index}`);
                } else {
                    alert("Vị trí không hợp lệ!");
                }
            }
            break;

        case 6:
            // Tìm phần tử lớn thứ hai trong mảng
            if (numbers.length < 2) {
                alert("Mảng phải có ít nhất 2 phần tử!");
            } else {
                let max = -Infinity, secondMax = -Infinity;
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] > max) {
                        secondMax = max;
                        max = numbers[i];
                    } else if (numbers[i] > secondMax && numbers[i] !== max) {
                        secondMax = numbers[i];
                    }
                }
                if (secondMax === -Infinity) {
                    alert("Không có phần tử lớn thứ hai!");
                } else {
                    alert("Phần tử lớn thứ hai trong mảng là: " + secondMax);
                }
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
