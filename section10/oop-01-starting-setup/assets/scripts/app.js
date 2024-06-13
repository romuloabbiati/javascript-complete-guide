class Product {
  // title = "DEFAULT";
  // imgUrl;
  // description;
  // price;

  constructor(title, image, description, price) {
    this.title = title;
    this.imgUrl = image;
    this.description = description;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `
      <h2>Total: \$${this.totalAmount.toFixed(2)}</h2>
    `;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, curItem) => prevValue + curItem.price,
      0
    );
    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems; 
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
                <img src='${this.product.imgUrl}' alt='${this.product.title}' >
                <div class='product-item__content'>
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
      `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A pillow",
      "https://content.cylindo.com/api/v2/4980/products/20354CUSHIONS-65%20X%2065/frames/4/20354CUSHIONS-65%20X%2065.webp?size=1024&feature=COLOUR:347",
      "A soft pillow",
      19.99
    ),
    new Product(
      "A carpet",
      "https://images.ctfassets.net/9y4fi2gkk4ov/47bITZF9JSc6RIMohq0qap/53db350cfd22912cb642cdb504a5a660/Cambria_Ruby_Tufted_Rug_5x7.jpg?fm=avif&w=1920&q=75",
      "A carpet you might like - or not",
      89.99
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const productListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(productListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
