function findMaxAndPosition(arr) {
    if (!Array.isArray(arr) || arr.some(num => typeof num !== "number")) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng ko có dữ liệu";
    }

    let max = Math.max(...arr); // Tìm số lớn nhất
    let position = arr.indexOf(max); // Tìm vị trí đầu tiên của số lớn nhất

    return `max = ${max}\nposition: ${position}`;
}

// Kiểm thử hàm với các bộ dữ liệu mẫu:
console.log(findMaxAndPosition([10, 9, 5, 11, 24, 5]));
// Output: "max = 24\nposition: 4"

console.log(findMaxAndPosition([]));
// Output: "Mảng ko có dữ liệu"

console.log(findMaxAndPosition("abc"));
// Output: "Dữ liệu không hợp lệ"
