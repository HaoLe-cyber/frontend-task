let str = ""; // Biến lưu chuỗi nhập vào
let choice; // Biến lưu lựa chọn của người dùng

do {
    // Hiển thị menu
    choice = +prompt(
        `========= MENU =========
1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
6. Chuyển đổi chuỗi ký tự thành dạng snake_case
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
            // Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let words = str.toLowerCase().split(/\s+/);
                let wordCount = {};
                for (let i = 0; i < words.length; i++) {
                    let word = words[i];
                    if (word !== "") {
                        if (!wordCount[word]) {
                            wordCount[word] = 1;
                        } else {
                            wordCount[word]++;
                        }
                    }
                }
                let result = "";
                for (let word in wordCount) {
                    if (wordCount[word] > 1) {
                        result += `${word}: ${wordCount[word]} lần\n`;
                    }
                }
                alert(result === "" ? "Không có từ nào trùng lặp." : result);
            }
            break;

        case 4:
            // Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let words = str.split(/\s+/);
                let minWord = words[0];
                let maxWord = words[0];

                for (let i = 1; i < words.length; i++) {
                    if (words[i].length < minWord.length) {
                        minWord = words[i];
                    }
                    if (words[i].length > maxWord.length) {
                        maxWord = words[i];
                    }
                }

                alert(
                    `Từ ngắn nhất: "${minWord}" (${minWord.length} ký tự)\nTừ dài nhất: "${maxWord}" (${maxWord.length} ký tự)`
                );
            }
            break;

        case 5:
            // Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let charCount = {};
                let maxCount = 0;
                let maxChars = "";

                for (let i = 0; i < str.length; i++) {
                    let char = str[i];
                    if (char !== " ") {
                        if (!charCount[char]) {
                            charCount[char] = 1;
                        } else {
                            charCount[char]++;
                        }
                        if (charCount[char] > maxCount) {
                            maxCount = charCount[char];
                            maxChars = char;
                        } else if (charCount[char] === maxCount) {
                            maxChars += ", " + char;
                        }
                    }
                }

                alert(`Ký tự xuất hiện nhiều nhất: ${maxChars} (${maxCount} lần)`);
            }
            break;

        case 6:
            // Chuyển đổi chuỗi ký tự thành dạng snake_case
            if (str === "") {
                alert("Chưa có dữ liệu! Vui lòng nhập chuỗi trước.");
            } else {
                let snake_case_str = "";
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === " ") {
                        snake_case_str += "_";
                    } else {
                        snake_case_str += str[i].toLowerCase();
                    }
                }
                alert("Chuỗi dạng snake_case: " + snake_case_str);
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
