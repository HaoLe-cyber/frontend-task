function formatDates(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "string")) {
        return "Dữ liệu không hợp lệ";
    }
    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let formattedDates = arr.map(date => {
        let parts = date.split("-");
        if (parts.length === 3) {
            let [year, month, day] = parts;
            return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
        }
        return null; // Trả về null nếu không đúng định dạng
    }).filter(date => date !== null); // Loại bỏ giá trị null nếu có

    return formattedDates;
}

// Kiểm thử hàm với các bộ dữ liệu mẫu:
console.log(formatDates(["2025-03-10", "2024-12-25", "2023-07-01"]));
// Output: ["10/03/2025", "25/12/2024", "01/07/2023"]

console.log(formatDates([]));
// Output: "Mảng không có phần tử nào"

console.log(formatDates("abc"));
// Output: "Dữ liệu không hợp lệ"
