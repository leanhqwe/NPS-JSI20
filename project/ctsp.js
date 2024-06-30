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
  