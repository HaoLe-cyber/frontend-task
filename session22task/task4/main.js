// Yêu cầu người dùng nhập vào dãy số
let userInput = prompt("Nhập vào dãy số:");

// Kiểm tra nếu người dùng không nhập gì
if (!userInput) {
    console.log("Vui lòng nhập một dãy số hợp lệ.");
} else {
    // Chuyển chuỗi nhập vào thành mảng bằng split("")
    let numbers = userInput.split("");

    // Khởi tạo biến max với chữ số đầu tiên
    let max = numbers[0];

    // Duyệt từng phần tử trong mảng để tìm chữ số lớn nhất
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; // Cập nhật max nếu tìm thấy số lớn hơn
        }
    }

    // Hiển thị kết quả
    console.log("Chữ số lớn nhất là:", max);
}
