let inputA = +prompt("Nhập vào giá trị A");
let inputB = +prompt("Nhập vào giá trị B");
let inputOperator = prompt("Mời bạn nhập các phép tính (+,-,*,/)");

if (isNaN(inputA) || isNaN(inputB)) {
    alert("Ngừng máy tính vì thiếu số liệu hoặc nhập sai số!");
} else {
    let result;

    switch (inputOperator) {
        case "+":
            result = inputA + inputB;
            alert(`Kết quả của phép tính trên: ${inputA} + ${inputB} = ${result}`);
            break;
        case "-":
            result = inputA - inputB;
            alert(`Kết quả của phép tính trên: ${inputA} - ${inputB} = ${result}`);
            break;
        case "*":
            result = inputA * inputB;
            alert(`Kết quả của phép tính trên: ${inputA} * ${inputB} = ${result}`);
            break;
        case "/":
            if (inputB === 0) {
                alert("Lỗi! Không thể chia cho 0.");
            } else {
                result = inputA / inputB;
                alert(`Kết quả của phép tính trên: ${inputA} / ${inputB} = ${result}`);
            }
            break;
        default:
            alert("Vui lòng nhập đúng phép tính (+,-,*,/)!");
    }
}
