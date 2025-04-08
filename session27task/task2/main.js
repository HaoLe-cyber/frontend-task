let students = [];

while (true) {
    let choice = prompt(`\n=== MENU QUẢN LÝ SINH VIÊN ===\n1. Nhập danh sách sinh viên\n2. Hiển thị danh sách sinh viên\n3. Tìm sinh viên theo tên\n4. Xóa sinh viên khỏi danh sách\n5. Thoát\nChọn một chức năng:`);

    switch (choice) {
        case "1":
            let count = parseInt(prompt("Nhập số lượng sinh viên: "));
            if (!isNaN(count) && count > 0) {
                for (let i = 0; i < count; i++) {
                    let name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
                    students.push(name);
                }
                alert("Đã nhập xong danh sách sinh viên.");
            } else {
                alert("Số lượng không hợp lệ!");
            }
            break;

        case "2":
            if (students.length > 0) {
                alert("Danh sách sinh viên:\n" + students.join("\n"));
            } else {
                alert("Danh sách sinh viên trống!");
            }
            break;

        case "3":
            let searchName = prompt("Nhập tên sinh viên cần tìm: ");
            let found = students.filter(student => student.toLowerCase() === searchName.toLowerCase());
            if (found.length > 0) {
                alert("Sinh viên tìm thấy: " + found.join(", "));
            } else {
                alert("Không tìm thấy sinh viên trong danh sách.");
            }
            break;

        case "4":
            let deleteName = prompt("Nhập tên sinh viên cần xóa: ");
            let index = students.findIndex(student => student.toLowerCase() === deleteName.toLowerCase());
            if (index !== -1) {
                students.splice(index, 1);
                alert("Đã xóa sinh viên khỏi danh sách.");
            } else {
                alert("Không tìm thấy sinh viên để xóa.");
            }
            break;

        case "5":
            alert("Thoát chương trình!");
            exit();
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
    }
}
