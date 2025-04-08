let a = +prompt("Nhập hệ số a:");
let b = +prompt("Nhập hệ số b:");
let c = +prompt("Nhập hệ số c:");

if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            alert("Phương trình có vô số nghiệm.");
        } else {
            alert("Phương trình vô nghiệm.");
        }
    } else {
        let x = -c / b;
        alert("Phương trình có một nghiệm: x = " + x);
    }
} else {
    let delta = b * b - 4 * a * c;

    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("Phương trình có hai nghiệm phân biệt:\n" + "x1 = " + x1 + "\n" + "x2 = " + x2);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert("Phương trình có nghiệm kép: x = " + x);
    } else {
        alert("Phương trình vô nghiệm.");
    }
}
