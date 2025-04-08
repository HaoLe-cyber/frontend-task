let arr = []; // Mảng lưu số nguyên
let input = prompt("Nhập vào 10 số nguyên, cách nhau bởi dấu phẩy (,)");

// Tách chuỗi thành mảng, loại bỏ khoảng trắng
arr = input.split(",").map(num => num.trim());

// Kiểm tra tính hợp lệ của mảng
let isValid = arr.length === 10 && arr.every(num => /^-?\d+$/.test(num));

if (!isValid) {
    console.log("Dữ liệu không hợp lệ");
} else {
    // Chuyển đổi chuỗi thành số nguyên
    arr = arr.map(Number);

    // Lọc các số >= 10
    let result = arr.filter(num => num >= 10);

    if (result.length > 0) {
        console.log(result);
    } else {
        console.log("Mảng không có phần tử nào");
    }
}
