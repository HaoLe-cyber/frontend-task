let running = true;

while (running) {
    let choice = prompt(`Chọn phép tính:\n1. Cộng\n2. Trừ\n3. Nhân\n4. Chia\n5. Thoát`);

    if (choice === "5") {
        alert("Thoát chương trình.");
        running = false;
        break;
    }

    let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
    let num2 = parseFloat(prompt("Nhập số thứ hai:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Dữ liệu không hợp lệ. Vui lòng nhập số.");
        continue;
    }

    let result;
    switch (choice) {
        case "1":
            result = num1 + num2;
            alert(`Kết quả: ${num1} + ${num2} = ${result}`);
            break;
        case "2":
            result = num1 - num2;
            alert(`Kết quả: ${num1} - ${num2} = ${result}`);
            break;
        case "3":
            result = num1 * num2;
            alert(`Kết quả: ${num1} × ${num2} = ${result}`);
            break;
        case "4":
            if (num2 === 0) {
                alert("Lỗi: Không thể chia cho 0.");
            } else {
                result = num1 / num2;
                alert(`Kết quả: ${num1} ÷ ${num2} = ${result}`);
            }
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 5.");
    }
}
