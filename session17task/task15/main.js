
let radius = parseFloat(prompt("Nhập bán kính của hình cầu (r):"));


const PI = Math.PI;


let volume = (4 / 3) * PI * Math.pow(radius, 3);
let surfaceArea = 4 * PI * Math.pow(radius, 2);
let circumference = 2 * PI * radius;


document.writeln(`Thể tích hình cầu: ${volume.toFixed(2)} đơn vị³`);
document.writeln(`Diện tích bề mặt hình cầu: ${surfaceArea.toFixed(2)} đơn vị²`);
document.writeln(`Chu vi lớn nhất của hình cầu: ${circumference.toFixed(2)} đơn vị`);   