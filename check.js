document.getElementById('checkoutForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    const orderDetails = {
        fullName,
        address,
        email,
        phone,
        paymentMethod,
        cart: JSON.parse(localStorage.getItem('clientCart')) || []
    };

    console.log('Order Details:', orderDetails);

    // Remove items from cart after order is placed
    localStorage.removeItem('clientCart');
    alert('Compra finalizada com sucesso!');
    window.location.href = 'catalog.html';
});
