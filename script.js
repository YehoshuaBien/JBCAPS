let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    // Add product to the cart array
    cart.push({ name: productName, price: productPrice });
    
    // Update the total price
    total += productPrice;

    // Update the cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    // Get the cart items element
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    // Populate the cart items list
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    // Update the total display
    const cartTotal = document.getElementById('cartTotal');
    cartTotal.textContent = total.toFixed(2);
}

function clearCart() {
    // Clear the cart array and total
    cart = [];
    total = 0;

    // Update the cart display
    updateCartDisplay();
}