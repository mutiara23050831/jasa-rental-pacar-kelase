let cart = [];

function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };
    cart.push(product);
    alert(`${productName} telah ditambahkan ke keranjang!`);
    console.log(cart); // Untuk melihat isi keranjang di konsol
}