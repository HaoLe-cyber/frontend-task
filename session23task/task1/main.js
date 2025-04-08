let arr = [1, 22, 12, 8, 7, 9];
let result = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        result.push(arr[i]);
    }
}

if (result.length === 0) {
    alert('Không có số nào lớn hơn 10');
} else {
    alert(result);
}