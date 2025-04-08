let str = ""; // Biến lưu chuỗi nhập vào
let choice; // Biến lưu lựa chọn của người dùng

do {
    // Hiển thị menu
    choice = +prompt(
        `========= MENU =========
1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Đếm số lượng các ký tự là chữ và số trong chuỗi
4. Chuyển đổi ký tự viết hoa → viết thường, viết thường → viết hoa
5. Trộn lẫn các ký tự với chuỗi thứ 2
6. Tách chuỗi thành các từ, sắp xếp theo độ dài từ ngắn đến dài
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
            // Đếm số lượng ký tự chữ và số trong chuỗi
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let letterCount = 0, digitCount = 0;
                for (let i = 0; i < str.length; i++) {
                    if (/[a-zA-Z]/.test(str[i])) {
                        letterCount++;
                    } else if (/[0-9]/.test(str[i])) {
                        digitCount++;
                    }
                }
                alert(`Số lượng chữ cái: ${letterCount}\nSố lượng chữ số: ${digitCount}`);
            }
            break;

        case 4:
            // Chuyển đổi chữ hoa thành chữ thường, chữ thường thành chữ hoa
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let newStr = "";
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === str[i].toUpperCase()) {
                        newStr += str[i].toLowerCase();
                    } else {
                        newStr += str[i].toUpperCase();
                    }
                }
                alert("Chuỗi sau khi chuyển đổi: " + newStr);
            }
            break;

        case 5:
            // Trộn lẫn các ký tự với chuỗi thứ 2
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let str2 = prompt("Nhập chuỗi thứ 2:");
                let mixedStr = "";
                let maxLength = str.length > str2.length ? str.length : str2.length;

                for (let i = 0; i < maxLength; i++) {
                    if (i < str.length) mixedStr += str[i];
                    if (i < str2.length) mixedStr += str2[i];
                }

                alert("Chuỗi trộn lẫn: " + mixedStr);
            }
            break;

        case 6:
            // Tách chuỗi thành các từ, sắp xếp theo độ dài từ ngắn đến dài
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let words = str.split(/\s+/);
                for (let i = 0; i < words.length - 1; i++) {
                    for (let j = i + 1; j < words.length; j++) {
                        if (words[i].length > words[j].length) {
                            let temp = words[i];
                            words[i] = words[j];
                            words[j] = temp;
                        }
                    }
                }
                alert("Chuỗi sau khi sắp xếp theo độ dài từ: " + words.join(" "));
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
