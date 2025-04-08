let number = parseInt(prompt("Nhập một số nguyên từ 0 - 999:"));

if (isNaN(number) || number < 0 || number > 999) {
    alert("Vui lòng nhập một số hợp lệ từ 0 - 999.");
} else {
    let ones, tens, hundreds, result = "";

    ones = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    tens = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
    hundreds = ["", "một trăm", "hai trăm", "ba trăm", "bốn trăm", "năm trăm", "sáu trăm", "bảy trăm", "tám trăm", "chín trăm"];

    let h = Math.floor(number / 100);
    let t = Math.floor((number % 100) / 10);
    let o = number % 10;

    if (number === 0) {
        result = "không";
    } else {
        if (h > 0) {
            result += hundreds[h] + " ";
        }
        if (t > 0) {
            if (t === 1) {
                result += "mười ";
            } else {
                result += tens[t] + " ";
            }
        } else if (h > 0 && o > 0) {
            result += "lẻ ";
        }
        if (o > 0) {
            if (t === 1 && o === 5) {
                result += "lăm";
            } else if (o === 1 && t > 1) {
                result += "mốt";
            } else {
                result += ones[o];
            }
        }
    }
    alert("Số bạn nhập là: " + result.trim());
}
