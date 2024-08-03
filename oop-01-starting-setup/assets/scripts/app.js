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

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHookId) {
        this.hookId = renderHookId;
    }

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class ShoppingCart extends Component {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`
    }

    get totalAmount() {
        const sum = this.items.reduce((prevValue, curItem) => {
            return prevValue + curItem.price;
        }, 0);
        return sum;
    }

    constructor(renderHookId) {
        super(renderHookId);
    }

    addProduct(product) {
        const updateItems = [...this.items];
        updateItems.push(product);
        this.cartItems = updateItems;
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        this.totalOutput = cartEl.querySelector('h2');
        return cartEl;
    }
}

class ProductItem extends Component{
    constructor(product, renderHookId) {
        super(renderHookId);
        this.product = product;
    }

    addCartHandler() {
        App.addProductToCart(this.product);
    }

    render() {
        const prodEl = this.createRootElement('li', 'product-item');
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

class ProductList extends Component{
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

    constructor(renderHookId) {
        super(renderHookId);
    };

    render() {
        const prodList = this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')])
        for (const prod of this.products) {
            const productItem = new ProductItem(prod, 'prod-list');
            productItem.render();
        }
    };
}

class Shop {
    render() {
        this.cart = new ShoppingCart('app');
        this.cart.render();
        const productList = new ProductList('app');
        productList.render();
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