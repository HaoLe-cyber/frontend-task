let str = ""; // Biến lưu chuỗi nhập vào
let choice; // Biến lưu lựa chọn của người dùng

do {
    // Hiển thị menu
    choice = +prompt(
        `========= MENU =========
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Loại bỏ khoảng trắng đầu và cuối chuỗi
4. Đảo ngược chuỗi ký tự
5. Đếm số lượng từ trong chuỗi ký tự
6. Tìm kiếm và thay thế ký tự trong chuỗi
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
            // Loại bỏ khoảng trắng đầu và cuối chuỗi
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let trimmedStr = "";
                let start = 0;
                let end = str.length - 1;

                while (str[start] === " " && start < str.length) {
                    start++;
                }
                while (str[end] === " " && end > start) {
                    end--;
                }
                for (let i = start; i <= end; i++) {
                    trimmedStr += str[i];
                }
                str = trimmedStr;
                alert("Chuỗi sau khi loại bỏ khoảng trắng: " + str);
            }
            break;

        case 4:
            // Đảo ngược chuỗi ký tự
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let reversedStr = "";
                for (let i = str.length - 1; i >= 0; i--) {
                    reversedStr += str[i];
                }
                alert("Chuỗi sau khi đảo ngược: " + reversedStr);
            }
            break;

        case 5:
            // Đếm số lượng từ trong chuỗi
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let count = 0;
                let isWord = false;

                for (let i = 0; i < str.length; i++) {
                    if (str[i] !== " ") {
                        if (!isWord) {
                            count++;
                            isWord = true;
                        }
                    } else {
                        isWord = false;
                    }
                }
                alert("Số lượng từ trong chuỗi: " + count);
            }
            break;

        case 6:
            // Tìm kiếm và thay thế ký tự trong chuỗi
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let findChar = prompt("Nhập ký tự cần tìm:");
                let replaceChar = prompt("Nhập ký tự thay thế:");
                let newStr = "";

                let found = false;
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === findChar) {
                        newStr += replaceChar;
                        found = true;
                    } else {
                        newStr += str[i];
                    }
                }
                if (found) {
                    str = newStr;
                    alert("Chuỗi sau khi thay thế: " + str);
                } else {
                    alert("Không tìm thấy ký tự '" + findChar + "' trong chuỗi.");
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
