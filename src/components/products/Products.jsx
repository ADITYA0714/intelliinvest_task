import React from 'react'
import "./products.css"
import { useEffect } from 'react';


const Products = () => {
  function truncateTitle(title, maxLength) {
      const words = title.split(' ');
      if (words.length <= maxLength) {
          return title;
      } else {
          return words.slice(0, maxLength).join(' ') + '...';
      }
  }
  useEffect(() => {
    const limit = 10;

    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((products) => {
        const imageContainer = document.getElementById('productImages');

        products.forEach((product) => {
          const productContainer = document.createElement('div');
          productContainer.className = 'productContainer';

          const imageElement = document.createElement('img');
          imageElement.src = product.image;

          const titleParagraph = document.createElement('p');
          titleParagraph.textContent = truncateTitle(product.title, 2);

          const price = document.createElement('p');
          price.textContent = '$' + product.price;

          const btn = document.createElement('button');
          btn.textContent = 'ADD TO CART';

          productContainer.appendChild(imageElement);
          productContainer.appendChild(titleParagraph);
          productContainer.appendChild(price);
          productContainer.appendChild(btn);

          imageContainer.appendChild(productContainer);
        });
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []); 
      return (
        <>
        <h2 className="section__title">Trending Product</h2>
        <span className="section__subtitle">Grab your best style</span>
        <div id="productImages">      
        </div>
        </>
        )
      }

export default Products
