function sum(a, b) {
    return a + b;
}
let a = +prompt("Nhập số a:");
let b = +prompt("Nhập só b:");
if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log("Dữ liệu ko hợp lệ");
}
else {
    console.log("Tổng 2 số là: " + sum(a, b));
}