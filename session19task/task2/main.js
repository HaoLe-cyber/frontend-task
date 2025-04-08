let char = prompt("Nhập một ký tự:");

if (char.length !== 1) {
    alert("Vui lòng nhập một ký tự duy nhất.");
} else {
    let code = char.charCodeAt(0);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        alert("Ký tự bạn nhập là một chữ cái.");
    } else {
        alert("Ký tự bạn nhập không phải là chữ cái.");
    }
}
