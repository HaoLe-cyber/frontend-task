let books = [
    { id: 1, name: "JavaScript Basics", price: 200, quantity: 10, category: "Programming" },
    { id: 2, name: "Python for Beginners", price: 250, quantity: 8, category: "Programming" },
    { id: 3, name: "Data Science Handbook", price: 300, quantity: 5, category: "Science" },
    { id: 4, name: "History of Vietnam", price: 180, quantity: 12, category: "History" }
];

let cart = [];

function displayBooksByCategory(category) {
    let filteredBooks = books.filter(book => book.category.toLowerCase() === category.toLowerCase());
    if (filteredBooks.length === 0) {
        console.log("Không có sách trong danh mục này!");
    } else {
        console.log("Danh sách sách trong danh mục:", category);
        filteredBooks.forEach(book => console.log(book));
    }
}

function addBook(id, name, price, quantity, category) {
    books.push({ id, name, price, quantity, category });
    console.log("Sách đã được thêm thành công!");
}

function searchBook(query) {
    let result = books.find(book => book.id === query || book.name.toLowerCase() === query.toLowerCase());
    result ? console.log("Tìm thấy sách:", result) : console.log("Không tìm thấy sách!");
}

function buyBook(id, quantity) {
    let book = books.find(book => book.id === id);
    if (!book) {
        console.log("Sách không tồn tại!");
        return;
    }
    if (book.quantity < quantity) {
        console.log("Không đủ sách trong kho!");
        return;
    }
    book.quantity -= quantity;
    let cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ id: book.id, name: book.name, price: book.price, quantity });
    }
    console.log("Mua sách thành công!");
}

function sortBooks(order) {
    books.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
    console.log("Danh sách sách đã được sắp xếp:", books);
}

function calculateCartTotal() {
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`Tổng số lượng sách đã mua: ${totalQuantity}, Tổng tiền: ${totalPrice}`);
}

function displayTotalStock() {
    let totalStock = books.reduce((sum, book) => sum + book.quantity, 0);
    console.log("Tổng số lượng sách trong kho:", totalStock);
}

function menu() {
    let choice;
    do {
        choice = prompt("Chọn chức năng:\n1. Hiển thị sách theo thể loại\n2. Thêm sách\n3. Tìm kiếm sách\n4. Mua sách\n5. Sắp xếp sách\n6. Tính tổng tiền giỏ hàng\n7. Hiển thị tổng số lượng sách trong kho\n8. Thoát");
        switch (choice) {
            case "1":
                let category = prompt("Nhập thể loại sách:");
                displayBooksByCategory(category);
                break;
            case "2":
                let id = parseInt(prompt("Nhập ID sách:"));
                let name = prompt("Nhập tên sách:");
                let price = parseFloat(prompt("Nhập giá sách:"));
                let quantity = parseInt(prompt("Nhập số lượng sách:"));
                let categoryNew = prompt("Nhập thể loại sách:");
                addBook(id, name, price, quantity, categoryNew);
                break;
            case "3":
                let query = prompt("Nhập ID hoặc tên sách để tìm kiếm:");
                searchBook(isNaN(query) ? query : parseInt(query));
                break;
            case "4":
                let bookId = parseInt(prompt("Nhập ID sách cần mua:"));
                let buyQuantity = parseInt(prompt("Nhập số lượng cần mua:"));
                buyBook(bookId, buyQuantity);
                break;
            case "5":
                let order = prompt("Nhập 'asc' để sắp xếp tăng dần, 'desc' để giảm dần:");
                sortBooks(order);
                break;
            case "6":
                calculateCartTotal();
                break;
            case "7":   
                displayTotalStock();
                break;
            case "8":
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ!");
        }
    } while (choice !== "8");
}

menu();
