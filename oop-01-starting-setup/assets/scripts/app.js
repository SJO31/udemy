class Product {
    title = "DEFAULT";
    imageUrl;
    price;
    description;

    constructor(title, img, price, desc) {
        this.title = title;
        this.imageUrl = img;
        this.price = price;
        this.description = desc;
    }
}

const productList = {
    products: [
        new Product(
            "Pillow",
            "https://images.unsplash.com/photo-1534628123120-3235d5a13277?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            19.99,
            "A soft pillow!"
        ),
        new Product(
            "Carpet",
            "https://images.unsplash.com/photo-1444362408440-274ecb6fc730?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            39.99,
            "A robust indoor carpet"
        )
    ],
    render() {
        const renderHook = document.getElementById("app");
        const prodList = document.createElement("ul");
        prodList.className = "product-list";
        for (const prod of this.products) {
            const prodEl = document.createElement("li");
            prodEl.className = "product-item";
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}" >
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    },
};

productList.render();
