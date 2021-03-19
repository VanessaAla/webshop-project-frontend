export const selectAllProducts = (reduxState) =>
  reduxState.products.allProducts;

//export const selectProducts = (reduxState) => {
//const sortedProducts = [...reduxState.products.allProducts];

// return sortedProducts.sort((a, b) => {
// return b.bought - a.bought;
//  });
//};
