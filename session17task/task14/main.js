
let radius = parseFloat(prompt("Nhập bán kính của hình trụ (r):"));
let height = parseFloat(prompt("Nhập chiều cao của hình trụ (h):"));



const PI = Math.PI;


let circumference = 2 * PI * radius;
let lateralArea = 2 * PI * radius * height;
let totalArea = 2 * PI * radius * (height + radius);
let volume = PI * Math.pow(radius, 2) * height;

document.writeln(`Chu vi đáy: ${circumference.toFixed(2)} đơn vị`);
document.writeln(`Diện tích xung quanh: ${lateralArea.toFixed(2)} đơn vị²`);
document.writeln(`Diện tích toàn phần: ${totalArea.toFixed(2)} đơn vị²`);
document.writeln(`Thể tích hình trụ: ${volume.toFixed(2)} đơn vị³`);