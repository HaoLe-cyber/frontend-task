let a = parseFloat(prompt("Nhập a: "));
let b = parseFloat(prompt("Nhập b: "));
let c = parseFloat(prompt("Nhập c: "));

let delta = b * b - 4 * a * c;

if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("Phương trình có hai nghiệm: x1 = " + x1 + ", x2 = " + x2);
} else if (delta === 0) {
    let x = -b / (2 * a);
    alert("Phương trình có nghiệm kép: x = " + x);
} else {
    alert("Phương trình vô nghiệm");
}