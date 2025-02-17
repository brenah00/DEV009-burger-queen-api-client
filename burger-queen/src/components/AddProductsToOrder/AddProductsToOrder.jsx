import { getProducts } from "../../services/request";
import React, { useState, useEffect } from 'react';
import { showAlertError } from "../../alert/aler.js"

export default function AddProductToOrder({ selectedProductType, dispatch }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(localStorage.getItem('token'))
      .then((response) => {
        // Actualiza el estado con los productos obtenidos
        setProducts(response.data);
      })
      .catch((error) => {
        showAlertError("An error has occurred while obtaining list of product");
      });
  }, []); // El segundo argumento, [], asegura que se ejecute una sola vez cuando el componente se monta
  return (
    <div className="container bg-bgqueen-secondary w-full rounded-lg md:w-full">
      <h2 className="text-3xl text-bgqueen-primary mb-4 text-center p-2 font-titles font-bold">{selectedProductType}</h2>
      <ul className="w-11/12 mx-auto grid grid-cols-1">
        {products
          .filter((product) => {
            return selectedProductType === product.type;
          })
          .map((product) => (
            <li key={product.id} className="grid grid-cols-5 bg-bgqueen-gray rounded-lg shadow-md p-2 items-center justify-items-center hover:bg-white mb-3.5">
              <img src={product.image} alt={product.name} className="w-2/3 col-span-1" />
              <section className="col-span-3 justify-self-start ml-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-600">${product.price}</p>
              </section>
              <i className="text-4xl text-bgqueen-primary col-span-1 cursor-pointer fa-solid fa-circle-plus"
                id={`item-${product.id}`}
                onClick={() => dispatch({ type: 'addProduct', item: { product, qty: 1, subtotal: product.price } })}></i>

            </li>
          ))}
      </ul>
    </div>
  );
}
