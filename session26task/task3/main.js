function filterValidEmails(emailList) {
    if (!Array.isArray(emailList)) {
        return "Dữ liệu không hợp lệ";
    }

    let validEmails = emailList.filter(email => {
        return typeof email === "string" && email.includes("@") && !email.includes(" ");
    });

    return validEmails.length > 0 ? validEmails : "Mảng không có phần tử nào";
}

// Kiểm thử hàm với các bộ dữ liệu mẫu:
console.log(filterValidEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]));
// Output: ["john.doe@gmail.com", "hello@domain.net"]

console.log(filterValidEmails([]));
// Output: "Mảng không có phần tử nào"

console.log(filterValidEmails("abc"));
// Output: "Dữ liệu không hợp lệ"
