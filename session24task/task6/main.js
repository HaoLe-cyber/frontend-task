let str = ""; // Chuỗi nhập từ người dùng
let choice; // Biến lưu lựa chọn của người dùng

do {
    // Hiển thị menu
    choice = +prompt(
        `========= MENU =========
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự
5. Kiểm tra chuỗi có phải là chuỗi đối xứng không
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát
=========================
Lựa chọn của bạn:`
    );

    switch (choice) {
        case 1:
            // Nhập chuỗi
            str = prompt("Nhập vào một chuỗi:");
            alert("Đã nhập chuỗi thành công!");
            break;

        case 2:
            // Hiển thị chuỗi
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                alert("Chuỗi hiện tại: " + str);
            }
            break;

        case 3:
            // Tính độ dài của chuỗi
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                alert("Độ dài của chuỗi: " + str.length);
            }
            break;

        case 4:
            // Đếm số lần xuất hiện của một ký tự
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let charToCount = prompt("Nhập ký tự cần đếm:");
                let count = 0;
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === charToCount) {
                        count++;
                    }
                }
                alert(`Số lần xuất hiện của '${charToCount}' trong chuỗi: ${count}`);
            }
            break;

        case 5:
            // Kiểm tra chuỗi đối xứng
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let reversedStr = "";
                for (let i = str.length - 1; i >= 0; i--) {
                    reversedStr += str[i];
                }
                if (str === reversedStr) {
                    alert("Chuỗi là chuỗi đối xứng!");
                } else {
                    alert("Chuỗi không phải là chuỗi đối xứng!");
                }
            }
            break;

        case 6:
            // Chuyển đổi chữ cái đầu thành chữ in hoa
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let newStr = "";
                let capitalize = true; // Cờ để kiểm tra khi nào cần viết hoa
                for (let i = 0; i < str.length; i++) {
                    if (capitalize && str[i] !== " ") {
                        newStr += str[i].toUpperCase();
                        capitalize = false;
                    } else {
                        newStr += str[i];
                    }
                    if (str[i] === " ") {
                        capitalize = true;
                    }
                }
                alert("Chuỗi sau khi chuyển đổi: " + newStr);
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
