// Future JavaScript enhancements
console.log("Grocery website loaded");
<script>
let cart = [];

const buttons = document.querySelectorAll('.add-cart');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const name = card.querySelector('.product-name').innerText;
        const price = parseFloat(card.querySelector('.price').innerText);

        // Add to cart
        cart.push({ name, price });

        // Update cart display
        updateCart();
    });
});

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.innerText = `Total: ₹${total}`;
}
</script>