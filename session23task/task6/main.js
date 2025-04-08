// Khai báo mảng có sẵn với các giá trị truthy và falsy
let arr = [0, 1, false, 2, "", 3, null, undefined, NaN, 4, "hello", 5, 0, false];

// Mảng mới sau khi loại bỏ các phần tử falsy
let filteredArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {  // Nếu giá trị là truthy thì thêm vào mảng mới
        filteredArr.push(arr[i]);
    }
}

// Hiển thị kết quả
console.log("Mảng ban đầu:", arr);
console.log("Mảng sau khi loại bỏ các phần tử falsy:", filteredArr);
