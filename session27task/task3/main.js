let choice;
do {
    choice = parseInt(prompt(`Chọn chức năng:
    1. Tính diện tích hình tròn
    2. Tính chu vi hình tròn
    3. Tính diện tích hình chữ nhật
    4. Tính chu vi hình chữ nhật
    5. Thoát`));

    switch (choice) {
        case 1:
            let r1 = parseFloat(prompt("Nhập bán kính hình tròn:"));
            if (r1 > 0) {
                let areaCircle = Math.PI * r1 * r1;
                alert(`Diện tích hình tròn: ${areaCircle.toFixed(2)}`);
            } else {
                alert("Bán kính không hợp lệ!");
            }
            break;

        case 2:
            let r2 = parseFloat(prompt("Nhập bán kính hình tròn:"));
            if (r2 > 0) {
                let perimeterCircle = 2 * Math.PI * r2;
                alert(`Chu vi hình tròn: ${perimeterCircle.toFixed(2)}`);
            } else {
                alert("Bán kính không hợp lệ!");
            }
            break;

        case 3:
            let length = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
            let width = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
            if (length > 0 && width > 0) {
                let areaRectangle = length * width;
                alert(`Diện tích hình chữ nhật: ${areaRectangle.toFixed(2)}`);
            } else {
                alert("Chiều dài hoặc chiều rộng không hợp lệ!");
            }
            break;

        case 4:
            let l = parseFloat(prompt("Nhập chiều dài hình chữ nhật:"));
            let w = parseFloat(prompt("Nhập chiều rộng hình chữ nhật:"));
            if (l > 0 && w > 0) {
                let perimeterRectangle = 2 * (l + w);
                alert(`Chu vi hình chữ nhật: ${perimeterRectangle.toFixed(2)}`);
            } else {
                alert("Chiều dài hoặc chiều rộng không hợp lệ!");
            }
            break;

        case 5:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
} while (choice !== 5);
