
let input = prompt("Nhập một số:");
let n = parseInt(input);

if (!isNaN(n) && n >= 0) {
    let sqrt = Math.sqrt(n);
    let result = Number.isInteger(sqrt) ? `${n} là số chính phương` : `${n} không phải số chính phương`;

    alert(result);
} else {
    alert("Vui lòng nhập một số nguyên không âm hợp lệ.");
}
