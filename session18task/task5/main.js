let input = +prompt("Nhập vào tham niên của nhân viên: ");

if (input < 1) {
    alert("Mới vào nghề");
} else if (input >= 1 && input <= 3) {
    alert("Nhân viên có kinh nghiệm");
} else if (input >= 4 && input <= 6) {
    alert("Chuyên viên");
} else {
    alert("Quản lý");
}