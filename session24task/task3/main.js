let numbers = []; // Mảng số nguyên
let choice; // Biến lưu lựa chọn của người dùng

do {
    // Hiển thị menu
    choice = +prompt(
        `========= MENU =========
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
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
            // Tìm phần tử lớn nhất và chỉ số của nó
            if (numbers.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let max = numbers[0];
                let index = 0;
                for (let i = 1; i < numbers.length; i++) {
                    if (numbers[i] > max) {
                        max = numbers[i];
                        index = i;
                    }
                }
                alert(`Phần tử lớn nhất là ${max} ở vị trí ${index}`);
            }
            break;

        case 4:
            // Tính tổng và trung bình cộng của các số dương
            if (numbers.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let sum = 0, count = 0;
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] > 0) {
                        sum += numbers[i];
                        count++;
                    }
                }
                if (count === 0) {
                    alert("Không có số dương trong mảng.");
                } else {
                    let average = sum / count;
                    alert(`Tổng các số dương: ${sum}\nTrung bình cộng: ${average.toFixed(2)}`);
                }
            }
            break;

        case 5:
            // Đảo ngược mảng
            if (numbers.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let reversedArray = "";
                for (let i = numbers.length - 1; i >= 0; i--) {
                    reversedArray += numbers[i] + " ";
                }
                alert("Mảng sau khi đảo ngược: " + reversedArray.trim());
            }
            break;

        case 6:
            // Kiểm tra mảng có đối xứng không
            if (numbers.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let isSymmetric = true;
                for (let i = 0; i < Math.floor(numbers.length / 2); i++) {
                    if (numbers[i] !== numbers[numbers.length - 1 - i]) {
                        isSymmetric = false;
                        break;
                    }
                }
                if (isSymmetric) {
                    alert("Mảng là mảng đối xứng.");
                } else {
                    alert("Mảng không phải là mảng đối xứng.");
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
