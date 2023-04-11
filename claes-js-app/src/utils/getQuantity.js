export default function getQuantity(products) {
  const uniqueProducts = [];
  products.forEach((product) => {
    const existingProductIndex = uniqueProducts.findIndex(
      (uniqueProduct) => uniqueProduct.id === product.id
    );
    console.log("existingProductIndex", existingProductIndex);
    if (existingProductIndex !== -1) {
      uniqueProducts[existingProductIndex].quantity++;
    } else {
      uniqueProducts.push({ ...product, quantity: 1 });
    }
  });
  return uniqueProducts;
}
