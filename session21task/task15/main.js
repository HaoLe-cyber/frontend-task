let amount = +prompt("Nhập số tiền cần rút (phải chia hết cho 1000):");

if (amount % 1000 !== 0) {
    alert("Số tiền nhập vào không hợp lệ! Vui lòng nhập số chia hết cho 1000.");
} else {
    let denominations = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
    let result = "";

    for (let i = 0; i < denominations.length; i++) {
        let count = Math.floor(amount / denominations[i]); // Số tờ tiền của mệnh giá hiện tại
        if (count > 0) {
            result += `${denominations[i]} - ${count} tờ<br>`;
            amount -= count * denominations[i]; // Trừ số tiền đã rút
        }
    }

    document.writeln(result); // Hiển thị kết quả trên trình duyệt
}
