let contacts = [];

function addContact(id, name, email, phone) {
    contacts.push({ id, name, email, phone });
    console.log("Liên hệ đã được thêm thành công!");
}

function displayContacts() {
    if (contacts.length === 0) {
        console.log("Danh bạ trống!");
        return;
    }
    console.log("Danh sách danh bạ:");
    contacts.forEach(contact => {
        console.log(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);
    });
}

function searchContactByPhone(phone) {
    let result = contacts.find(contact => contact.phone === phone);
    if (result) {
        console.log(`Tìm thấy: ID: ${result.id}, Name: ${result.name}, Email: ${result.email}, Phone: ${result.phone}`);
    } else {
        console.log("Không tìm thấy số điện thoại trong danh bạ!");
    }
}

function updateContact(id, newName, newEmail, newPhone) {
    let index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts[index] = { id, name: newName, email: newEmail, phone: newPhone };
        console.log("Thông tin liên hệ đã được cập nhật!");
    } else {
        console.log("Không tìm thấy liên hệ để cập nhật!");
    }
}

function deleteContact(id) {
    let index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log("Liên hệ đã được xóa!");
    } else {
        console.log("Không tìm thấy liên hệ để xóa!");
    }
}

function menu() {
    let choice;
    do {
        choice = prompt("Chọn chức năng:\n1. Thêm liên hệ\n2. Hiển thị danh bạ\n3. Tìm kiếm theo số điện thoại\n4. Cập nhật thông tin\n5. Xóa liên hệ\n6. Thoát");
        switch (choice) {
            case "1":
                let id = parseInt(prompt("Nhập ID:"));
                let name = prompt("Nhập tên:");
                let email = prompt("Nhập email:");
                let phone = prompt("Nhập số điện thoại:");
                addContact(id, name, email, phone);
                break;
            case "2":
                displayContacts();
                break;
            case "3":
                let searchPhone = prompt("Nhập số điện thoại cần tìm:");
                searchContactByPhone(searchPhone);
                break;
            case "4":
                let updateId = parseInt(prompt("Nhập ID liên hệ cần cập nhật:"));
                let newName = prompt("Nhập tên mới:");
                let newEmail = prompt("Nhập email mới:");
                let newPhone = prompt("Nhập số điện thoại mới:");
                updateContact(updateId, newName, newEmail, newPhone);
                break;
            case "5":
                let deleteId = parseInt(prompt("Nhập ID liên hệ cần xóa:"));
                deleteContact(deleteId);
                break;
            case "6":
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== "6");
}

menu();
