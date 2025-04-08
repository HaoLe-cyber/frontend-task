let a = parseFloat(prompt("Nhập độ dài cạnh a:"));
let b = parseFloat(prompt("Nhập độ dài cạnh b:"));
let c = parseFloat(prompt("Nhập độ dài cạnh c:"));

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    alert("Vui lòng nhập độ dài hợp lệ cho các cạnh tam giác.");
} else if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        alert("Tam giác đều");
    } else if (a === b || a === c || b === c) {
        alert("Tam giác cân");
    } else if (
        a * a + b * b === c * c ||
        a * a + c * c === b * b ||
        b * b + c * c === a * a
    ) {
        alert("Tam giác vuông");
    } else {
        alert("Tam giác thường");
    }
} else {
    alert("Ba cạnh không tạo thành tam giác hợp lệ.");
}
