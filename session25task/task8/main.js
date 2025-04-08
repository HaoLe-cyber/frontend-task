function isStrongPassword(password) {
    if (password.length < 8) return false;

    let hasUpperCase = /[A-Z]/.test(password);
    let hasLowerCase = /[a-z]/.test(password);
    let hasNumber = /[0-9]/.test(password);

    return hasUpperCase && hasLowerCase && hasNumber;
}

console.log(isStrongPassword("Abc123!@"));
console.log(isStrongPassword("weakpass"));
console.log(isStrongPassword("12345678"));
console.log(isStrongPassword("PASSWORD1"));
console.log(isStrongPassword("StrongPass1"));
console.log(isStrongPassword("abcdEfgh"));
