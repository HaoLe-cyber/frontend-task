let matrix = []; // Mảng 2 chiều
let choice; // Biến lưu lựa chọn của người dùng

do {
    // Hiển thị menu
    choice = +prompt(
        `========= MENU =========
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng của một hàng hoặc một cột
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
            // Tính tổng tất cả phần tử trong mảng
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
            // Tính tổng đường chéo chính (nếu là ma trận vuông)
            if (matrix.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else if (matrix.length !== matrix[0].length) {
                alert("Không thể tính tổng đường chéo chính vì mảng không phải ma trận vuông!");
            } else {
                let sumMainDiagonal = 0;
                for (let i = 0; i < matrix.length; i++) {
                    sumMainDiagonal += matrix[i][i];
                }
                alert("Tổng đường chéo chính: " + sumMainDiagonal);
            }
            break;

        case 5:
            // Tính tổng đường chéo phụ (nếu là ma trận vuông)
            if (matrix.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else if (matrix.length !== matrix[0].length) {
                alert("Không thể tính tổng đường chéo phụ vì mảng không phải ma trận vuông!");
            } else {
                let sumSecondaryDiagonal = 0;
                for (let i = 0; i < matrix.length; i++) {
                    sumSecondaryDiagonal += matrix[i][matrix.length - 1 - i];
                }
                alert("Tổng đường chéo phụ: " + sumSecondaryDiagonal);
            }
            break;

        case 6:
            // Tính trung bình cộng của một hàng hoặc một cột
            if (matrix.length === 0) {
                alert("Mảng chưa có dữ liệu! Vui lòng nhập mảng trước.");
            } else {
                let type = prompt("Nhập 'row' để tính theo hàng hoặc 'col' để tính theo cột:");
                if (type === "row") {
                    let rowIndex = +prompt("Nhập số hàng cần tính trung bình cộng:");
                    if (rowIndex >= 0 && rowIndex < matrix.length) {
                        let sum = 0;
                        for (let j = 0; j < matrix[rowIndex].length; j++) {
                            sum += matrix[rowIndex][j];
                        }
                        let avg = sum / matrix[rowIndex].length;
                        alert(`Trung bình cộng hàng ${rowIndex}: ${avg.toFixed(2)}`);
                    } else {
                        alert("Số hàng không hợp lệ!");
                    }
                } else if (type === "col") {
                    let colIndex = +prompt("Nhập số cột cần tính trung bình cộng:");
                    if (colIndex >= 0 && colIndex < matrix[0].length) {
                        let sum = 0;
                        for (let i = 0; i < matrix.length; i++) {
                            sum += matrix[i][colIndex];
                        }
                        let avg = sum / matrix.length;
                        alert(`Trung bình cộng cột ${colIndex}: ${avg.toFixed(2)}`);
                    } else {
                        alert("Số cột không hợp lệ!");
                    }
                } else {
                    alert("Lựa chọn không hợp lệ!");
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
