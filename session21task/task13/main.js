let n = 8; // Độ cao của tam giác

// Hình a - Tam giác vuông góc dưới bên trái
let resultA = "Hình a:\n";
for (let i = n; i >= 1; i--) {
    resultA += "*".repeat(i) + "\n";
}
console.log(resultA);

// Hình b - Tam giác vuông góc trên bên trái
let resultB = "Hình b:\n";
for (let i = 1; i <= n; i++) {
    resultB += "*".repeat(i) + "\n";
}
console.log(resultB);

// Hình c - Tam giác vuông góc dưới bên phải
let resultC = "Hình c:\n";
for (let i = 1; i <= n; i++) {
    resultC += " ".repeat(n - i) + "*".repeat(i) + "\n";
}
console.log(resultC);

// Hình d - Tam giác vuông góc trên bên phải
let resultD = "Hình d:\n";
for (let i = n; i >= 1; i--) {
    resultD += " ".repeat(n - i) + "*".repeat(i) + "\n";
}
console.log(resultD);
