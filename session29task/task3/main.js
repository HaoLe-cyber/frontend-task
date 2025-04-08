let menu = {};

function addDish(category, name, price, description) {
    if (!menu[category]) {
        menu[category] = [];
    }
    menu[category].push({ name, price, description });
    console.log(`Đã thêm món '${name}' vào danh mục '${category}'!`);
}

function removeDish(name) {
    for (let category in menu) {
        let index = menu[category].findIndex(dish => dish.name === name);
        if (index !== -1) {
            menu[category].splice(index, 1);
            console.log(`Đã xóa món '${name}' khỏi danh mục '${category}'!`);
            return;
        }
    }
    console.log("Không tìm thấy món ăn để xóa!");
}

function updateDish(name, newName, newPrice, newDescription) {
    for (let category in menu) {
        let dish = menu[category].find(dish => dish.name === name);
        if (dish) {
            dish.name = newName;
            dish.price = newPrice;
            dish.description = newDescription;
            console.log(`Đã cập nhật thông tin món '${name}'!`);
            return;
        }
    }
    console.log("Không tìm thấy món ăn để cập nhật!");
}

function displayMenu() {
    console.log("===== Menu Nhà Hàng =====");
    for (let category in menu) {
        console.log(`\n${category.toUpperCase()}:`);
        menu[category].forEach(dish => {
            console.log(`- ${dish.name}: ${dish.price} VND - ${dish.description}`);
        });
    }
}

function searchDish(name) {
    for (let category in menu) {
        let dish = menu[category].find(dish => dish.name === name);
        if (dish) {
            console.log(`Tìm thấy: ${dish.name} - ${dish.price} VND - ${dish.description} (Danh mục: ${category})`);
            return;
        }
    }
    console.log("Không tìm thấy món ăn!");
}

function menuManager() {
    let choice;
    do {
        choice = prompt("Chọn chức năng:\n1. Thêm món ăn\n2. Xóa món ăn\n3. Cập nhật món ăn\n4. Hiển thị menu\n5. Tìm kiếm món ăn\n6. Thoát");
        switch (choice) {
            case "1":
                let category = prompt("Nhập danh mục món ăn:");
                let name = prompt("Nhập tên món ăn:");
                let price = parseFloat(prompt("Nhập giá món ăn:"));
                let description = prompt("Nhập mô tả món ăn:");
                addDish(category, name, price, description);
                break;
            case "2":
                let removeName = prompt("Nhập tên món ăn cần xóa:");
                removeDish(removeName);
                break;
            case "3":
                let oldName = prompt("Nhập tên món ăn cần cập nhật:");
                let newName = prompt("Nhập tên mới:");
                let newPrice = parseFloat(prompt("Nhập giá mới:"));
                let newDescription = prompt("Nhập mô tả mới:");
                updateDish(oldName, newName, newPrice, newDescription);
                break;
            case "4":
                displayMenu();
                break;
            case "5":
                let searchName = prompt("Nhập tên món ăn cần tìm:");
                searchDish(searchName);
                break;
            case "6":
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== "6");
}

menuManager();
