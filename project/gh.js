// Mảng lưu các sản phẩm trong giỏ hàng
let cartItems = [];

// Hàm tính tổng giá trị các sản phẩm trong giỏ hàng
function calculateTotal() {
    let total = 0;
    for (let item of cartItems) {
        total += item.price * item.quantity;
    }
    return total;
}

// Hàm cập nhật giao diện hiển thị giỏ hàng
function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    for (let item of cartItems) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `<span>${item.name}</span> - <span>${item.quantity}</span> x <span>${item.price} VNĐ</span>`;
        cartDiv.appendChild(itemDiv);
    }
    document.getElementById('total').textContent = calculateTotal();
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(name, price) {
    let item = cartItems.find(i => i.name === name);
    if (item) {
        item.quantity++;
    } else {
        cartItems.push({ name: name, price: price, quantity: 1 });
    }
    updateCart();
}

// Hàm xử lý khi click vào nút thanh toán
function checkout() {
    alert('Chức năng thanh toán chưa được triển khai trong ví dụ này!');
}

// Thêm ví dụ sản phẩm vào giỏ hàng
addToCart('Áo thun', 150000);
addToCart('Quần jeans', 300000);
