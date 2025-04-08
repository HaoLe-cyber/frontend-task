// Khai báo mảng số nguyên gồm 10 phần tử có sẵn
let numbers = [5, 12, 7, 5, 8, 5, 30, 12, 5, 12];

// Khởi tạo đối tượng để đếm số lần xuất hiện của từng phần tử
let count = {};

// Duyệt mảng để đếm tần suất xuất hiện của mỗi số
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (count[num] === undefined) {
        count[num] = 1;
    } else {
        count[num]++;
    }
}

// Xác định phần tử có số lần xuất hiện nhiều nhất
let maxCount = 0;
let mostFrequentNumber = Infinity; // Gán giá trị vô cùng để tìm số nhỏ nhất

for (let key in count) {
    let num = parseInt(key);
    let freq = count[key];

    // Nếu tìm thấy số có tần suất lớn hơn, cập nhật kết quả
    if (freq > maxCount || (freq === maxCount && num < mostFrequentNumber)) {
        maxCount = freq;
        mostFrequentNumber = num;
    }
}

// Hiển thị kết quả
alert(`Phần tử xuất hiện nhiều nhất: ${mostFrequentNumber} (xuất hiện ${maxCount} lần)`);
