import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrum from '../components/BreadCrum.js/BreadCrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
  const {all_product} = useContext(ShopContext); // Assuming products are stored in a property named 'products'
  // console.log(all_product)
  const { productId } = useParams();
  const product =all_product.find((e) => e.id === Number(productId));
  console.log(product.id)

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
