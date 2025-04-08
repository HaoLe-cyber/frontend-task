// Danh sách sản phẩm trong cửa hàng (Tên sản phẩm, Số lượng, Giá tiền)
let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];

// Giỏ hàng của người dùng
let cart = [];

// Hiển thị danh sách sản phẩm trong cửa hàng
function displayProducts() {
    alert("\n===== Danh sách sản phẩm =====");
    products.forEach(product => {
        alert(`- ${product[0]} | Số lượng: ${product[1]} | Giá: ${product[2]} VND`);
    });
}

// Mua sản phẩm
function buyProduct() {
    let buyProduct = prompt("Nhập tên sản phẩm bạn muốn mua: ").toLowerCase();
    let found = false;

    for (let i = 0; i < products.length; i++) {
        if (products[i][0] === buyProduct) {
            found = true;
            if (products[i][1] > 0) {
                products[i][1]--; // Giảm số lượng sản phẩm trong kho

                let inCart = false;
                for (let j = 0; j < cart.length; j++) {
                    if (cart[j][0] === buyProduct) {
                        cart[j][1]++;
                        inCart = true;
                        break;
                    }
                }

                if (!inCart) {
                    cart.push([buyProduct, 1, products[i][2]]);
                }

                alert(`Bạn đã mua 1 ${buyProduct}.`);
            } else {
                alert(`Sản phẩm ${buyProduct} đã hết hàng.`);
            }
            break;
        }
    }

    if (!found) {
        alert(`Sản phẩm ${buyProduct} không có trong cửa hàng.`);
    }
}

// Hiển thị giỏ hàng
function displayCart() {
    alert("\nGiỏ hàng của bạn:");
    if (cart.length === 0) {
        alert("Giỏ hàng trống.");
    } else {
        cart.forEach(item => {
            alert(`- ${item[0]} | Số lượng: ${item[1]} | Giá: ${item[2]} VND`);
        });
    }
}

// Tính tổng tiền và hiển thị hóa đơn
function checkout() {
    alert("\nHÓA ĐƠN CỦA BẠN:");
    let total = 0;
    cart.forEach(item => {
        let cost = item[1] * item[2];
        total += cost;
        alert(`- ${item[0]} | Số lượng: ${item[1]} | Giá: ${item[2]} VND | Tổng: ${cost} VND`);
    });
    alert(`Tổng tiền: ${total} VND`);

    // Xóa giỏ hàng sau khi thanh toán
    cart = [];
    alert("Thanh toán thành công!");
}

// Chạy chương trình mua hàng
while (true) {
    let choice = +prompt(`\n======= MENU =======
    1. Xem danh sách sản phẩm
    2. Mua sản phẩm
    3. Xem giỏ hàng
    4. Thanh toán và hiển thị hóa đơn
    5. Thoát
        Lựa chọn của bạn:`);

    if (choice == 1) {
        displayProducts();
    } else if (choice === 2) {
        buyProduct();
    } else if (choice === 3) {
        displayCart();
    } else if (choice === 4) {
        checkout();
    } else if (choice === 5) {
        alert("Chương trình kết thúc.");
        break;
    } else {
        alert("Lựa chọn không hợp lệ! Vui lòng nhập lại.");
    }
}