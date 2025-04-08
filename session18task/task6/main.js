const year = parseInt(prompt("Nhập một năm bất kỳ:"));
let isLeapYear;

if (!isNaN(year)) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                isLeapYear = true;
            } else {
                isLeapYear = false;
            }
        } else {
            isLeapYear = true;
        }
    } else {
        isLeapYear = false;
    }

    if (isLeapYear) {
        alert(year + " là năm nhuận.");
    } else {
        alert(year + " không phải là năm nhuận.");
    }
} else {
    alert("Vui lòng nhập một số hợp lệ.");
}
