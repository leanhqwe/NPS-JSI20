const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);

// Tham chiếu đến Realtime Database
const database = firebase.database();
 
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const shoppingCartList = document.getElementById('shopping-cart--list');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const product = products.find(p => p.id === productId);

      if (product) {
        const cartRef = database.ref('cart');
        cartRef.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        }).then(() => {
          console.log('Sản phẩm đã được thêm vào giỏ hàng');
        }).catch(error => {
          console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
        });
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const shoppingCartList = document.getElementById('shopping-cart--list');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const product = products.find(p => p.id === productId);

      if (product) {
        const cartRef = database.ref('cart');
        cartRef.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        }).then(() => {
          console.log('Sản phẩm đã được thêm vào giỏ hàng');
        }).catch(error => {
          console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
        });
      }
    });
  });
});


// Đọc dữ liệu từ Firebase và cập nhật giao diện
function updateCartUI() {
  shoppingCartList.innerHTML = '';

  const cartRef = database.ref('cart');
  cartRef.on('value', snapshot => {
    snapshot.forEach(childSnapshot => {
      const item = childSnapshot.val();

      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div class="_column product-info">
          <h4 class="product-name">${item.name}</h4>
          <div class="price product-single-price">${item.price}</div>
        </div>
        <div class="_column product-modifiers">
          <div class="_grid">
            <button class="_btn _column product-subtract">&minus;</button>
            <div class="_column product-qty">${item.quantity}</div>
            <button class="_btn _column product-plus">&plus;</button>
          </div>
          <button class="_btn entypo-trash product-remove">Remove</button>
          <div class="price product-total-price">$${(item.quantity * parseFloat(item.price.replace(',', ''))).toFixed(2)}</div>
        </div>
      `;

      shoppingCartList.appendChild(listItem);
    });
  });
}

// Gọi hàm để cập nhật giao diện giỏ hàng khi trang web được tải
document.addEventListener('DOMContentLoaded', updateCartUI);