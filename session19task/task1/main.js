let month = parseInt(prompt("Nhập tháng (1-12):"));

if (isNaN(month) || month < 1 || month > 12) {
    alert("Vui lòng nhập một tháng hợp lệ từ 1 đến 12.");
} else {
    let days;

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 2:
            days = 28; // Không xét năm nhuận
            break;
    }

    alert("Tháng " + month + " có " + days + " ngày.");
}
