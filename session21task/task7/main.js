let tienGoc = parseFloat(prompt("Tien ban dau "));
let laiSuat = parseFloat(prompt("Nhap lai hang thang(%):")) / 100;
let soThang = parseInt(prompt("Nhap thang gui:"));

let tongTien = tienGoc * Math.pow(1 + laiSuat, soThang);

let tienLai = tongTien - tienGoc;


document.writeln("Tiền lãi: " + tienLai.toFixed(3) + "<br>");
document.writeln("Tiền nhận được: " + tongTien.toFixed(3));