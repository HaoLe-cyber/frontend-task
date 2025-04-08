let numbers = []; // Mảng lưu các số nguyên
let choice; // Lựa chọn của người dùng

do {
    // Hiển thị menu
    choice = +prompt(
        `================== MENU ===================
1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra giá trị các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
7. Thêm một phần tử vào vị trí chỉ định
8. Thoát
============================================
Lựa chọn của bạn:`);

    // Xử lý các lựa chọn
    switch (choice) {
        case 1:
            // Nhập số phần tử và giá trị
            let n = +prompt("Nhập số lượng phần tử:");
            numbers = [];
            for (let i = 0; i < n; i++) {
                numbers[i] = +prompt(`Nhập phần tử thứ ${i + 1}:`);
            }
            alert("Đã nhập mảng thành công!");
            break;

        case 2:
            // Hiển thị mảng
            if (numbers.length === 0) {
                alert("Mảng rỗng! Hãy nhập dữ liệu trước.");
            } else {
                alert("Mảng hiện tại: " + numbers.join(", "));
            }
            break;

        case 3:
            // Tìm số chẵn và tính tổng
            let evenNumbers = "";
            let evenSum = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] % 2 === 0) {
                    evenNumbers += numbers[i] + " ";
                    evenSum += numbers[i];
                }
            }
            alert("Các số chẵn: " + evenNumbers + "\nTổng số chẵn: " + evenSum);
            break;

        case 4:
            // Tìm giá trị lớn nhất và nhỏ nhất
            if (numbers.length > 0) {
                let max = numbers[0], min = numbers[0];
                for (let i = 1; i < numbers.length; i++) {
                    if (numbers[i] > max) max = numbers[i];
                    if (numbers[i] < min) min = numbers[i];
                }
                alert("Giá trị lớn nhất: " + max + "\nGiá trị nhỏ nhất: " + min);
            } else {
                alert("Mảng rỗng!");
            }
            break;

        case 5:
            // Tìm số nguyên tố và tính tổng
            let primeNumbers = "";
            let primeSum = 0;
            for (let i = 0; i < numbers.length; i++) {
                let num = numbers[i];
                let isPrime = num > 1;
                for (let j = 2; j * j <= num; j++) {
                    if (num % j === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    primeNumbers += num + " ";
                    primeSum += num;
                }
            }
            alert("Các số nguyên tố: " + primeNumbers + "\nTổng số nguyên tố: " + primeSum);
            break;

        case 6:
            // Thống kê số xuất hiện
            let searchNum = +prompt("Nhập số muốn tìm:");
            let count = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] === searchNum) count++;
            }
            alert(`Số ${searchNum} xuất hiện ${count} lần trong mảng.`);
            break;

        case 7:
            // Thêm phần tử vào vị trí chỉ định
            let value = +prompt("Nhập giá trị cần thêm:");
            let position = +prompt("Nhập vị trí muốn chèn (bắt đầu từ 0):");
            if (position >= 0 && position <= numbers.length) {
                for (let i = numbers.length; i > position; i--) {
                    numbers[i] = numbers[i - 1];
                }
                numbers[position] = value;
                alert("Mảng sau khi thêm phần tử: " + numbers.join(", "));
            } else {
                alert("Vị trí không hợp lệ!");
            }
            break;

        case 8:
            // Thoát chương trình
            alert("Chương trình kết thúc!");
            break;

        default:
            alert("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 8.");
    }
} while (choice !== 8);
