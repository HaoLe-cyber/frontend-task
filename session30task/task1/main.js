let products = [
    { id: 1, name: "Mèn mén", price: 20000, quantity: 20, category: "Món ăn dân tộc Mông" },
    { id: 2, name: "Mứt", price: 80000, quantity: 21, category: "Món ăn dân tộc Kinh" },
    { id: 3, name: "Cơm Lam", price: 40000, quantity: 15, category: "Món ăn dân tộc Mông" },
    { id: 4, name: "Bánh đậu xanh", price: 60000, quantity: 30, category: "Món ăn dân tộc Mông" },
];

let cart = [];

function displayProductsByCategory() {
    let categories = {};
    products.forEach(product => {
        if (!categories[product.category]) {
            categories[product.category] = [];
        }
        categories[product.category].push(product);
    });

    console.log("Danh sách sản phẩm theo danh mục:");
    for (let category in categories) {
        console.log(`\n${category}:`);
        categories[category].forEach(p => console.log(`ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}, Số lượng: ${p.quantity}`));
    }
}

function buyProduct(id, quantity) {
    let product = products.find(p => p.id === id);
    if (!product) {
        console.log("Sản phẩm không có trong cửa hàng!");
        return;
    }
    if (product.quantity < quantity) {
        console.log("Không đủ số lượng sản phẩm trong kho!");
        return;
    }
    product.quantity -= quantity;
    let cartItem = cart.find(p => p.id === id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity });
    }
    console.log("Mua hàng thành công!");
}

function sortProducts(order) {
    if (order === "asc") {
        products.sort((a, b) => a.price - b.price);
    } else {
        products.sort((a, b) => b.price - a.price);
    }
    console.log("Sản phẩm đã được sắp xếp.");
    displayProductsByCategory();
}

function calculateTotal() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng tiền trong giỏ hàng: ${total} VND`);
}

function menu() {
    let choice;
    do {
        choice = prompt("Chọn chức năng:\n1. Hiển thị sản phẩm theo danh mục\n2. Mua sản phẩm\n3. Sắp xếp sản phẩm theo giá\n4. Tính tổng tiền giỏ hàng\n5. Thoát");
        switch (choice) {
            case "1":
                displayProductsByCategory();
                break;
            case "2":
                let id = parseInt(prompt("Nhập ID sản phẩm: "));
                let quantity = parseInt(prompt("Nhập số lượng muốn mua: "));
                buyProduct(id, quantity);
                break;
            case "3":
                let order = prompt("Nhập 'asc' để sắp xếp tăng dần, 'desc' để sắp xếp giảm dần: ");
                sortProducts(order);
                break;
            case "4":
                calculateTotal();
                break;
            case "5":
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== "5");
}

menu();
