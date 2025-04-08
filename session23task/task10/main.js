let numbers = []; // Mảng chứa số nguyên
let choice; // Biến lưu lựa chọn người dùng

do {
    // Hiển thị menu
    choice = +prompt(
        `================== MENU ===================
1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng
5. In ra các số nguyên tố trong mảng và tính tổng
6. Nhập một số và đếm số lần xuất hiện trong mảng
7. Thêm một phần tử vào vị trí chỉ định
8. Xóa một phần tử theo giá trị
9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần
0. Thoát
============================================
Lựa chọn của bạn:`
    );

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
            alert("Mảng hiện tại: " + numbers.join(", "));
            break;

        case 3:
            // Lọc số chẵn, tính tổng, sắp xếp giảm dần
            let evenNumbers = [];
            let sumEven = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] % 2 === 0) {
                    evenNumbers.push(numbers[i]);
                    sumEven += numbers[i];
                }
            }
            evenNumbers.sort((a, b) => b - a);
            alert("Số chẵn: " + evenNumbers.join(", ") + "\nTổng số chẵn: " + sumEven);
            break;

        case 4:
            // Tìm max, min và vị trí
            let max = numbers[0], min = numbers[0];
            let maxIndex = 0, minIndex = 0;
            for (let i = 1; i < numbers.length; i++) {
                if (numbers[i] > max) {
                    max = numbers[i];
                    maxIndex = i;
                }
                if (numbers[i] < min) {
                    min = numbers[i];
                    minIndex = i;
                }
            }
            alert(`Max: ${max} tại vị trí ${maxIndex}\nMin: ${min} tại vị trí ${minIndex}`);
            break;

        case 5:
            // Tìm số nguyên tố và tính tổng
            let primeNumbers = [];
            let sumPrime = 0;
            for (let i = 0; i < numbers.length; i++) {
                let isPrime = numbers[i] > 1;
                for (let j = 2; j * j <= numbers[i]; j++) {
                    if (numbers[i] % j === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    primeNumbers.push(numbers[i]);
                    sumPrime += numbers[i];
                }
            }
            alert("Số nguyên tố: " + primeNumbers.join(", ") + "\nTổng số nguyên tố: " + sumPrime);
            break;

        case 6:
            // Đếm số lần xuất hiện của một số
            let numToFind = +prompt("Nhập số cần đếm:");
            let count = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] === numToFind) count++;
            }
            alert(`Số ${numToFind} xuất hiện ${count} lần.`);
            break;

        case 7:
            // Thêm phần tử vào vị trí chỉ định
            let newElement = +prompt("Nhập phần tử muốn thêm:");
            let insertIndex = +prompt("Nhập vị trí muốn chèn:");
            if (insertIndex >= 0 && insertIndex <= numbers.length) {
                numbers.splice(insertIndex, 0, newElement);
                alert("Mảng sau khi thêm: " + numbers.join(", "));
            } else {
                alert("Vị trí không hợp lệ!");
            }
            break;

        case 8:
            // Xóa phần tử theo giá trị
            let valueToRemove = +prompt("Nhập phần tử muốn xóa:");
            let newArray = [];
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] !== valueToRemove) {
                    newArray.push(numbers[i]);
                }
            }
            numbers = newArray;
            alert("Mảng sau khi xóa: " + numbers.join(", "));
            break;

        case 9:
            // Sắp xếp mảng
            let order = prompt("Nhập 'asc' để sắp xếp tăng dần, 'desc' để sắp xếp giảm dần:");
            if (order === "asc") {
                numbers.sort((a, b) => a - b);
            } else if (order === "desc") {
                numbers.sort((a, b) => b - a);
            } else {
                alert("Lựa chọn không hợp lệ!");
                break;
            }
            alert("Mảng sau khi sắp xếp: " + numbers.join(", "));
            break;

        case 0:
            // Thoát chương trình
            alert("Chương trình kết thúc!");
            break;

        default:
            alert("Lựa chọn không hợp lệ! Vui lòng nhập từ 0 đến 9.");
    }
} while (choice !== 0);