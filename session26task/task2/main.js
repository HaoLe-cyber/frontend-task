function filterLongStrings(arr) {
    // Kiểm tra xem đầu vào có phải là một mảng chứa toàn chuỗi không
    if (!Array.isArray(arr) || !arr.every(item => typeof item === "string")) {
        return "Dữ liệu không hợp lệ";
    }

    // Lọc các chuỗi có độ dài > 5 ký tự
    let result = arr.filter(str => str.length > 5);

    // Kiểm tra nếu mảng rỗng sau khi lọc
    return result.length > 0 ? result : "Mảng không có phần tử nào";
}

// Test cases
console.log(filterLongStrings(["apple", "banana", "cat", "elephant", "dog"]));
console.log(filterLongStrings([]));
console.log(filterLongStrings("abc"));
console.log(filterLongStrings(["hello", "world", "JavaScript", "code"]));
console.log(filterLongStrings(["Hi", "Bye", "Yes", "No"]));
