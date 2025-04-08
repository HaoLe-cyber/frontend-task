// Khai báo mảng ban đầu
let numbers = [1, 2, 3, 4, 5];

console.log("Mảng ban đầu:", numbers);

// Thêm phần tử vào cuối mảng bằng push()
numbers.push(6);
console.log("Thêm 6 vào cuối mảng:", numbers);

// Thêm nhiều phần tử vào cuối mảng bằng push()
numbers.push(7, 8, 9);
console.log("Thêm 7, 8, 9 vào cuối mảng:", numbers);

// Thêm phần tử vào đầu mảng bằng unshift()
numbers.unshift(0);
console.log("Thêm 0 vào đầu mảng:", numbers);

// Thêm nhiều phần tử vào đầu mảng bằng unshift()
numbers.unshift(-2, -1);
console.log("Thêm -2, -1 vào đầu mảng:", numbers);

// Thêm phần tử vào giữa mảng bằng splice()
numbers.splice(3, 0, 100); // Thêm số 100 vào vị trí index 3
console.log("Thêm 100 vào vị trí index 3:", numbers);

// Thêm nhiều phần tử vào giữa bằng splice()
numbers.splice(5, 0, 200, 300); // Thêm 200, 300 vào vị trí index 5
console.log("Thêm 200, 300 vào vị trí index 5:", numbers);
