const products = [
    {
      id: "1",
      name: "Áo phông trắng",
      image: "https://example.com/image1.jpg",
      price: "200,000 VND",
      description: "Áo phông trắng cổ tròn, chất liệu cotton thoáng mát.",
      category: "Áo phông"
    },
    {
      id: "2",
      name: "Quần short jeans",
      image: "https://example.com/image2.jpg",
      price: "300,000 VND",
      description: "Quần short jeans xanh, thiết kế trẻ trung, năng động.",
      category: "Quần short"
    },
    {
      id: "3",
      name: "Váy maxi hoa",
      image: "https://example.com/image3.jpg",
      price: "450,000 VND",
      description: "Váy maxi họa tiết hoa, chất liệu nhẹ nhàng, thoải mái.",
      category: "Váy"
    },
    {
      id: "4",
      name: "Áo hai dây",
      image: "https://example.com/image4.jpg",
      price: "180,000 VND",
      description: "Áo hai dây màu trắng, thiết kế đơn giản, dễ phối đồ.",
      category: "Áo"
    },
    {
      id: "5",
      name: "Quần short kaki",
      image: "https://example.com/image5.jpg",
      price: "320,000 VND",
      description: "Quần short kaki màu beige, thích hợp cho các hoạt động ngoài trời.",
      category: "Quần short"
    },
    {
      id: "6",
      name: "Áo sơ mi ngắn tay",
      image: "https://example.com/image6.jpg",
      price: "250,000 VND",
      description: "Áo sơ mi ngắn tay màu xanh dương, chất liệu cotton.",
      category: "Áo sơ mi"
    },
    {
      id: "7",
      name: "Váy ngắn chữ A",
      image: "https://example.com/image7.jpg",
      price: "400,000 VND",
      description: "Váy ngắn chữ A màu đen, thiết kế đơn giản, thanh lịch.",
      category: "Váy"
    },
    {
      id: "8",
      name: "Áo crop top",
      image: "https://example.com/image8.jpg",
      price: "200,000 VND",
      description: "Áo crop top màu hồng pastel, chất liệu thun co giãn.",
      category: "Áo"
    },
    {
      id: "9",
      name: "Quần legging thể thao",
      image: "https://example.com/image9.jpg",
      price: "350,000 VND",
      description: "Quần legging thể thao màu đen, chất liệu co giãn, thoáng mát.",
      category: "Quần"
    },
    {
      id: "10",
      name: "Đầm công sở",
      image: "https://example.com/image10.jpg",
      price: "500,000 VND",
      description: "Đầm công sở màu xanh navy, thiết kế ôm dáng, thanh lịch.",
      category: "Đầm"
    },
    {
      id: "11",
      name: "Áo polo",
      image: "https://example.com/image11.jpg",
      price: "270,000 VND",
      description: "Áo polo màu xám, chất liệu cotton thoáng mát.",
      category: "Áo polo"
    },
    {
      id: "12",
      name: "Quần jogger",
      image: "https://example.com/image12.jpg",
      price: "380,000 VND",
      description: "Quần jogger màu đen, chất liệu vải dù, thoải mái khi vận động.",
      category: "Quần jogger"
    },
    {
      id: "13",
      name: "Áo sơ mi hoa",
      image: "https://example.com/image13.jpg",
      price: "300,000 VND",
      description: "Áo sơ mi hoa màu trắng, thiết kế trẻ trung, năng động.",
      category: "Áo sơ mi"
    },
    {
      id: "14",
      name: "Váy yếm",
      image: "https://example.com/image14.jpg",
      price: "450,000 VND",
      description: "Váy yếm màu xanh denim, thiết kế cá tính, thời trang.",
      category: "Váy yếm"
    },
    {
      id: "15",
      name: "Áo khoác mỏng",
      image: "https://example.com/image15.jpg",
      price: "400,000 VND",
      description: "Áo khoác mỏng màu trắng, chất liệu dù chống nắng.",
      category: "Áo khoác"
    }
  ];
  
  function renderProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      document.getElementById('product-image').src = product.image;
      document.getElementById('product-name').textContent = product.name;
      document.getElementById('product-price').textContent = `Giá : ${product.price}`;
      document.getElementById('product-description').textContent = product.description;
    }
  }
  
  function renderRelatedProducts() {
    const relatedProductsList = document.getElementById('related-products-list');
    relatedProductsList.innerHTML = products.slice(1, 4).map(product => `
      <li>
        <h3>${product.name}</h3>
        <p>Giá: ${product.price}</p>
        <img src="${product.image}" alt="${product.name}" />
      </li>
    `).join('');
  }
  
  // Render the first product details and related products on page load
  document.addEventListener('DOMContentLoaded', () => {
    renderProductDetails('1');
    renderRelatedProducts();
  });
  