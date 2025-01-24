export const cart = [];

export function addToCart(productsArrayId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productsArrayId === cartItem.productsArrayId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productsArrayId: productsArrayId,
      quantity: 1,
    });
  }
}
