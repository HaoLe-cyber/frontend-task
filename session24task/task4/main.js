let matrix = []; // Mảng 2 chiều
let choice; // Biến lưu lựa chọn của người dùng

do {
    // Hiển thị menu
    choice = +prompt(
        `========= MENU =========
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát
=========================
Lựa chọn của bạn:`
    );

    switch (choice) {
        case 1:
            // Nhập mảng 2 chiều
            let rows = +prompt("Nhập số hàng:");
            let cols = +prompt("Nhập số cột:");
            matrix = [];

            for (let i = 0; i < rows; i++) {
                matrix[i] = [];
                for (let j = 0; j < cols; j++) {
                    matrix[i][j] = +prompt(`Nhập phần tử tại vị trí (${i}, ${j}):`);
                }
            }
            alert("Đã nhập mảng thành công!");
            break;

        case 2:
            // Hiển thị mảng 2 chiều
            if (matrix.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let matrixString = "";
                for (let i = 0; i < matrix.length; i++) {
                    matrixString += matrix[i].join("\t") + "\n";
                }
                alert("Mảng 2 chiều:\n" + matrixString);
            }
            break;

        case 3:
            // Tính tổng các phần tử trong mảng
            if (matrix.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let sum = 0;
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        sum += matrix[i][j];
                    }
                }
                alert("Tổng các phần tử trong mảng: " + sum);
            }
            break;

        case 4:
            // Tìm phần tử lớn nhất và chỉ số của nó
            if (matrix.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let max = matrix[0][0];
                let maxRow = 0, maxCol = 0;
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        if (matrix[i][j] > max) {
                            max = matrix[i][j];
                            maxRow = i;
                            maxCol = j;
                        }
                    }
                }
                alert(`Phần tử lớn nhất là ${max} tại vị trí (${maxRow}, ${maxCol})`);
            }
            break;

        case 5:
            // Tính trung bình cộng các phần tử của một hàng cụ thể
            if (matrix.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let rowIndex = +prompt("Nhập số hàng cần tính trung bình cộng:");
                if (rowIndex >= 0 && rowIndex < matrix.length) {
                    let sum = 0;
                    for (let j = 0; j < matrix[rowIndex].length; j++) {
                        sum += matrix[rowIndex][j];
                    }
                    let average = sum / matrix[rowIndex].length;
                    alert(`Trung bình cộng hàng ${rowIndex}: ${average.toFixed(2)}`);
                } else {
                    alert("Số hàng không hợp lệ!");
                }
            }
            break;

        case 6:
            // Đảo ngược các hàng trong mảng
            if (matrix.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                for (let i = 0; i < matrix.length; i++) {
                    let reversedRow = "";
                    for (let j = matrix[i].length - 1; j >= 0; j--) {
                        reversedRow += matrix[i][j] + " ";
                    }
                    alert(`Hàng ${i} sau khi đảo ngược: ` + reversedRow.trim());
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
