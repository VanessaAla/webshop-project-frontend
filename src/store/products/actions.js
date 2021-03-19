export function loadProducts(productsData) {
  return {
    type: "productsPage/loadProducts",
    payload: productsData,
  };
}
