//import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts } from "../store/products/selectors";

export default function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  return (
    <div>
      <h1>Champions Explorer</h1>
      <p>
        Welcome back, <strong>Vanessa</strong>! There are{" "}
        <strong>{products.length}</strong> champions in total:
      </p>
      <ul>
        {products.map((products) => (
          <li key={products.id}>
            <button
              onClick={() => {
                dispatch(products.id);
              }}
            >
              {/* {user.favorites.includes(product.id) ? "♥" : "♡"} */}
            </button>
            <strong>{products.name}</strong> ({products.description}) <br />
            <em>Bought {products.bought} times</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
