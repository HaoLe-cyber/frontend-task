// Khai báo mảng chứa danh sách tài khoản người dùng
let users = [];

// Chạy chương trình đăng ký tài khoản email
while (true) {
    let email = prompt("Nhập email muốn đăng ký (Nhập 'exit' để thoát):");

    // Kiểm tra nếu người dùng muốn thoát chương trình
    if (email.toLowerCase() === "exit") {
        console.log("Chương trình kết thúc.");
        break;
    }

    // Kiểm tra email hợp lệ: chứa @ và kết thúc bằng .com hoặc .vn
    let isValidEmail = email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"));

    if (!isValidEmail) {
        console.log("Email không hợp lệ! Vui lòng nhập lại.");
        continue;
    }

    // Kiểm tra email đã tồn tại trong danh sách users hay chưa
    if (users.includes(email)) {
        console.log("Tài khoản đã tồn tại!");
    } else {
        // Thêm email vào danh sách
        users.push(email);
        console.log("Đăng ký thành công!");
    }

    // Hiển thị danh sách người dùng đã đăng ký
    console.log("Danh sách tài khoản:", users);
}
