let userNameInput = prompt("Nhập vào tên tài khoản: ");


if (userNameInput === "ADMIN") {
    let passwordInput = prompt("Nhập vào mật khẩu: ");
    if (passwordInput === "TheMaster") {
        alert("Welcome!!!");
    } else if (passwordInput === "") {
        alert("Cancelled");
    } else {
        alert("Wrong password.");
    }
} else if (userNameInput === "") {
    alert("Cancelled");
} else {
    alert("WTF tao Không quen!")
}

