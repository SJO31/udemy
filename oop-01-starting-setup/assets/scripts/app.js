class Product {
    // title = "DEFAULT";
    // imageUrl;
    // price;
    // description;

    constructor(title, img, price, desc) {
        this.title = title;
        this.imageUrl = img;
        this.price = price;
        this.description = desc;
    }
}

class ShoppingCart {
    items = [];

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        cartEl.className = 'cart';
        return cartEl;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addCartHandler() {
        console.log('Adding product to cart');
        console.log(this.product);
    }

    render() {
        const prodEl = document.createElement("li");
        prodEl.className = "product-item";
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}" >
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addCartHandler.bind(this));
        return prodEl;
    }
}

class ProductList {
    products = [
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
    ];

    constructor() {};
    render() {
        const prodList = document.createElement("ul");
        prodList.className = "product-list";
        for (const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        return prodList;
    };
}

class Shop {
    render() {
        const renderHook = document.getElementById("app");

        const cart = new ShoppingCart();
        const cartEl = cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

const shop = new Shop();
shop.render();