const products = [
    { name: 'Áo Thun Trắng', priceOriginal: 300000, priceSale: 250000, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Quần Jeans Xanh', priceOriginal: 500000, priceSale: 450000, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Áo Sơ Mi Kẻ Sọc', priceOriginal: 400000, priceSale: 350000, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Áo Khoác Đen', priceOriginal: 600000, priceSale: 550000, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Quần Short Xám', priceOriginal: 200000, priceSale: 180000, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Áo Vest Xanh', priceOriginal: 700000, priceSale: 650000, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Quần Tây Đen', priceOriginal: 350000, priceSale: 320000, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Áo Hoodie Đỏ', priceOriginal: 450000, priceSale: 400000, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Áo Len Vàng', priceOriginal: 400000, priceSale: 370000, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Áo Khoác Nỉ', priceOriginal: 500000, priceSale: 470000, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Quần Kaki Be', priceOriginal: 300000, priceSale: 280000, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Áo Thun Xanh', priceOriginal: 250000, priceSale: 220000, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Quần Jogger Đen', priceOriginal: 350000, priceSale: 320000, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Áo Sơ Mi Trắng', priceOriginal: 400000, priceSale: 350000, imageUrl: 'https://via.placeholder.com/200' },
    { name: 'Áo Phông Đỏ', priceOriginal: 200000, priceSale: 170000, imageUrl: 'https://via.placeholder.com/200' }
];

const productGrid = document.getElementById('product-grid');

products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    productItem.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Giá gốc: ${product.priceOriginal.toLocaleString()} VND</p>
        <p>Giá khuyến mãi: ${product.priceSale.toLocaleString()} VND</p>
        <a href="#" class="view-details">Xem Chi Tiết</a>
    `;
    productGrid.appendChild(productItem);
});