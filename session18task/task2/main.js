let mathPoint = +prompt("Nhap vao diem mon toan: ");
let literaturePoint = +prompt("Nhap vao diem mon van: ");
let englishPoint = +prompt("Nhap vao diem mon tieng anh: ");
let avgPoint = (mathPoint + literaturePoint + englishPoint) / 3;

if (avgPoint >= 8.0) {
    alert("Hoc gioi vay man!")
} else if (avgPoint > 6.5 && avgPoint < 7.9) {
    alert("Hoc kha la on roi!")
} else if (avgPoint > 5.0 && avgPoint < 6.4) {
    alert("It ra cung trung binh!")
} else {
    alert("Hoc ma de yeu!")
}