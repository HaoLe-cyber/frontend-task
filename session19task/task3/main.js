let amount = parseFloat(prompt("Nhập số tiền:"));
let currency = prompt("Nhập loại tiền (VND hoặc USD):").toUpperCase();
const exchangeRate = 23000;

if (isNaN(amount) || amount <= 0) {
    alert("Vui lòng nhập một số tiền hợp lệ.");
} else {
    let convertedAmount;

    switch (currency) {
        case "VND":
            convertedAmount = amount / exchangeRate;
            alert(amount + " VND = " + convertedAmount.toFixed(2) + " USD");
            break;
        case "USD":
            convertedAmount = amount * exchangeRate;
            alert(amount + " USD = " + convertedAmount.toFixed(0) + " VND");
            break;
        default:
            alert("Vui lòng nhập loại tiền hợp lệ (VND hoặc USD).");
    }
}
