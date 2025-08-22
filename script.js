const products = [
  { id: 1, name: "T-Shirt", price: 20, image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/6708d0a207953912125d8795/cat_img/Dark_Brown_Full_Sleeve_Casual_Shirt_for_Men___Pure_Cotton_Shirt_AETXP214LC_2025-04-09_1.jpg" },
  { id: 2, name: "Shoes", price: 50, image: "https://neemans.com/cdn/shop/files/ND-ELB-Grey-_WebOptimized_a_cab28362-d4dc-4dec-9604-38c296b67e64.jpg?v=1724987899&width=800" },
  { id: 3, name: "Watch", price: 70, image: "https://sylvi.in/cdn/shop/files/Sylvi_Iconic_Brown_No_hand_800x1000_c2910dc4-1b62-4e9e-bece-b07b48f97ee5.webp?v=1690542069" },
  { id: 4, name: "Bag", price: 40, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7JqA-0W7h_hvQhW1Zp4FcZhk_3WUPjwbYfaKls_jvFKd_PqH2f1Xi6TRjk69R1YOxO0u8lysIOYJJLKraym-6Dz1FYpdD6iKbDf_-Y3M8z3E4gdMHPW4x_Q" }
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
let cart = [];

// Render Products
products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalEl.textContent = total;
}
