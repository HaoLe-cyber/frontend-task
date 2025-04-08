let width = +prompt("Nhập chiều ngang của hình chữ nhật:");
let height = +prompt("Nhập chiều dọc của hình chữ nhật:");

document.writeln("<pre>"); // Giữ đúng định dạng khoảng trắng

for (let i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
        // In hàng trên và hàng dưới toàn dấu "*"
        document.writeln("*".repeat(width) + "<br>");
    } else {
        // In hàng giữa với khoảng trống bên trong
        document.writeln("*" + " ".repeat(width - 2) + "*" + "<br>");
    }
}

document.writeln("</pre>"); // Kết thúc định dạng
