// Khai báo mảng ban đầu rỗng
let numbers = [];

// Chạy vòng lặp vô hạn cho menu
while (true) {
    // Hiển thị menu lựa chọn
    let choice = prompt(
        "MENU\n\n" +
        "1. Nhập vào mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Thêm phần tử\n" +
        "4. Sửa phần tử\n" +
        "5. Xóa phần tử\n" +
        "6. Thoát\n\n" +
        "Lựa chọn của bạn:"
    );

    // Chuyển giá trị nhập vào thành số
    choice = +choice;

    switch (choice) {
        case 1:
            // Nhập vào mảng
            let userInput = prompt("Nhập vào dãy số, cách nhau bằng dấu phẩy:");
            numbers = userInput.split(",");

            // Chuyển phần tử từ string sang number
            for (let i = 0; i < numbers.length; i++) {
                numbers[i] = +numbers[i];
            }

            alert("Nhập mảng thành công!");
            break;

        case 2:
            // Hiển thị mảng
            if (numbers.length === 0) {
                alert("Mảng đang rỗng! Hãy nhập vào mảng trước.");
            } else {
                alert("Mảng hiện tại: " + numbers.join(", "));
            }
            break;

        case 3:
            // Thêm phần tử vào mảng
            let newElement = +prompt("Nhập phần tử muốn thêm:");
            numbers.push(newElement);
            alert("Đã thêm phần tử " + newElement);
            break;

        case 4:
            // Sửa phần tử trong mảng
            let indexEdit = +prompt("Nhập vị trí (index) muốn sửa:");

            // Kiểm tra index hợp lệ
            if (indexEdit >= 0 && indexEdit < numbers.length) {
                let newValue = +prompt("Nhập giá trị mới:");
                numbers[indexEdit] = newValue;
                alert("Đã sửa phần tử tại vị trí " + indexEdit + " thành " + newValue);
            } else {
                alert("Vị trí không hợp lệ!");
            }
            break;

        case 5:
            // Xóa phần tử trong mảng
            let indexDelete = +prompt("Nhập vị trí (index) muốn xóa:");

            // Kiểm tra index hợp lệ
            if (indexDelete >= 0 && indexDelete < numbers.length) {
                let removedValue = numbers.splice(indexDelete, 1);
                alert("Đã xóa phần tử " + removedValue + " tại vị trí " + indexDelete);
            } else {
                alert("Vị trí không hợp lệ!");
            }
            break;

        case 6:
            // Thoát chương trình
            alert("Chương trình kết thúc!");
            break;

        default:
            // Lựa chọn không hợp lệ
            alert("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 6.");
            break;
    }

    // Thoát vòng lặp nếu người dùng chọn 6
    if (choice === 6) {
        break;
    }
}
