
let principal = parseFloat(prompt("Nhập số tiền gửi (VNĐ):"));

let months = parseInt(prompt("Nhập số tháng gửi:"));

const annualInterestRate = 4.3;

let monthlyInterestRate = (annualInterestRate / 100) / 12;

let interest = principal * monthlyInterestRate * months;

let totalAmount = principal + interest;

document.writeln(`Số tiền lãi nhận được sau ${months} tháng: ${interest.toLocaleString('vi-VN')} VNĐ`);
document.writeln(`Tổng số tiền sau ${months} tháng: ${totalAmount.toLocaleString('vi-VN')} VNĐ`);
