let a = +prompt("Nhap vao gia tri a:");
let b = +prompt("Nhap vao gia tri b:");
let c = +prompt("Nhap vao gia tri c:");
let delta = b * b - (4 * a * c);
let x1 = (-b + Math.sqrt(delta)) / 2 * a;
let x2 = (-b - Math.sqrt(delta)) / 2 * a;

document.writeln("2 nghiem cua phuong trinh la: " + "x1 = " + x1 + " x2= " + x2);