let numbers = [];

while (true) {
    let choice = parseInt(prompt(
        "===== MENU =====\n" +
        "1. Nhập danh sách số nguyên\n" +
        "2. Tính trung bình các số\n" +
        "3. Tìm số chẵn lớn nhất\n" +
        "4. Tìm số lẻ nhỏ nhất\n" +
        "5. Thoát\n" +
        "Nhập lựa chọn: "
    ));

    switch (choice) {
        case 1:
            let input = prompt("Nhập danh sách số nguyên, cách nhau bởi dấu cách: ");
            numbers = input.split(" ").map(Number);
            if (numbers.some(isNaN)) {
                alert("Dữ liệu không hợp lệ! Hãy nhập lại.");
                numbers = [];
            }
            break;

        case 2:
            if (numbers.length === 0) {
                alert("Danh sách rỗng!");
            } else {
                let sum = numbers.reduce((acc, num) => acc + num, 0);
                let avg = sum / numbers.length;
                alert("Trung bình cộng: " + avg);
            }
            break;

        case 3:
            let evenNumbers = numbers.filter(num => num % 2 === 0);
            if (evenNumbers.length === 0) {
                alert("Không có số chẵn nào!");
            } else {
                let maxEven = Math.max(...evenNumbers);
                alert("Số chẵn lớn nhất: " + maxEven);
            }
            break;

        case 4:
            let oddNumbers = numbers.filter(num => num % 2 !== 0);
            if (oddNumbers.length === 0) {
                alert("Không có số lẻ nào!");
            } else {
                let minOdd = Math.min(...oddNumbers);
                alert("Số lẻ nhỏ nhất: " + minOdd);
            }
            break;

        case 5:
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ! Hãy nhập lại.");
    }

    if (choice === 5) break;
}
