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

const productList = {
  products: [
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
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";

    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
                <img src='${prod.imgUrl}' alt='${prod.title}' >
                <div class='product-item__content'>
                    <h2>${prod.title}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                </div>
            `;
      prodList.append(prodEl);
    }

    renderHook.append(prodList);
  },
};

productList.render();
