const products = [
  {
    name: "Nike Air Force 1",
    price: 65000,
    img: "./NIKE AIR FORCE 1.jpeg",
  },
  {
    name: "Yeezy Boost 350 V2",
    price: 220000,
    img: "./Größe_ Das Modell fällt klein aus, es wird….jpeg",
  },
  {
    name: "Converse All Star",
    price: 35000,
    img: "./converse.jpeg",
  },
  {
    name: "Jordan 1 Retro OG",
    price: 180000,
    img: "./Nike Air Jordan 1.jpeg",
  },
  {
    name: "Nike Air Max 270",
    price: 75000,
    img: "./Nike Air Max 270 Men's Shoe - White.jpeg",
  },
  {
    name: "Puma RS-X3",
    price: 60000,
    img: "./Puma.jpeg",
  },
  {
    name: "Vans Old Skool",
    price: 40000,
    img: "./Rep the Vans Old Skool classic sneaker, the first….jpeg",
  },
  {
    name: "New Balance 550",
    price: 85000,
    img: "./New Balance.jpeg",
  },
];

const container = document.getElementById("product-list");
products.forEach((product) => {
  container.innerHTML += `
        <div class="product-card">
          <img src="${product.img}" alt="${product.name}" />
          <div class="product-name">${product.name}</div>
          <div class="product-price">₦${product.price.toLocaleString()}</div>
          <button class="btn">Add to Cart</button>
        </div>
      `;
});
