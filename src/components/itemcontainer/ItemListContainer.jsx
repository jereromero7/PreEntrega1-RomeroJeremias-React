import React, { useState, useEffect } from "react";
import ProductCard from "./productcard/ProductCard";
import style from "./ItemListContainer.module.css";

export default function ItemListContainer({ itemList }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(itemList);
  }, []);

  return (
    <main className= {style.container}>
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          id={product.id}
          img={product.img}
          isFavorite={product.isFavorite}
          isNewProduct={product.isNewProduct}
          isFreeShipping={product.isFreeShipping}
          title={product.title}
          price={product.price}
          fees={product.fees}
        />
      ))}
    </main>
  );

}
