let number = +prompt("Nhập vào số cần kiểm tra: ");

if (number % 3 === 0 && number % 5 === 0) {
    alert("Số này chia hết cho cả 3 và 5");
} else {
    alert("Số này không chia hết cho cả 3 và 5");
}
