function largestPossibleNumber(n) {
    if (typeof n !== "number" || !Number.isInteger(n)) {
        return "Dữ liệu không hợp lệ";
    }

    return parseInt(n.toString().split("").sort((a, b) => b - a).join(""));
}

// Test cases
console.log(largestPossibleNumber(213));
console.log(largestPossibleNumber(9071));
console.log(largestPossibleNumber(504));
console.log(largestPossibleNumber(1));
console.log(largestPossibleNumber(-325));
console.log(largestPossibleNumber("abc"));