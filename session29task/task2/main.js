let products = [];
let productId = 1;

function addProduct(name, price, category, quantity) {
    products.push({ id: productId++, name, price, category, quantity });
    console.log("Sản phẩm đã được thêm thành công!");
}

function displayProducts() {
    if (products.length === 0) {
        console.log("Không có sản phẩm nào trong danh sách.");
        return;
    }
    console.log("Danh sách sản phẩm:", products);
}

function getProductById(id) {
    let product = products.find(p => p.id === id);
    if (product) {
        console.log("Chi tiết sản phẩm:", product);
    } else {
        console.log("Không tìm thấy sản phẩm với ID:", id);
    }
}

function updateProduct(id, name, price, category, quantity) {
    let product = products.find(p => p.id === id);
    if (product) {
        product.name = name || product.name;
        product.price = price || product.price;
        product.category = category || product.category;
        product.quantity = quantity || product.quantity;
        console.log("Cập nhật sản phẩm thành công!");
    } else {
        console.log("Không tìm thấy sản phẩm với ID:", id);
    }
}

function deleteProduct(id) {
    let index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        console.log("Xóa sản phẩm thành công!");
    } else {
        console.log("Không tìm thấy sản phẩm với ID:", id);
    }
}

function filterProductsByPrice(minPrice, maxPrice) {
    let filteredProducts = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
    console.log("Sản phẩm trong khoảng giá:", filteredProducts);
}

// Ví dụ sử dụng
addProduct("Laptop", 15000000, "Electronics", 10);
addProduct("Điện thoại", 10000000, "Electronics", 5);
addProduct("Bàn phím", 500000, "Accessories", 15);

displayProducts();
getProductById(2);
updateProduct(1, "Laptop Gaming", 20000000, "Electronics", 7);
deleteProduct(3);
filterProductsByPrice(5000000, 20000000);
