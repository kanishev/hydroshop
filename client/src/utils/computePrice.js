export function computePrice(products) {
  return products.reduce((acc, el) => {
    return acc+= el.price * el.count;
  }, 0)
}
