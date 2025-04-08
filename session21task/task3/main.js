let correctPassword = "123456"; // Mật khẩu đặt trước
let userPassword = prompt("Nhập mật khẩu:");

if (userPassword === correctPassword) {
    alert("Mật khẩu đúng! Đăng nhập thành công.");
} else {
    alert("Mật khẩu sai! Vui lòng thử lại.");
}
