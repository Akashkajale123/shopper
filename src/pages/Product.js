import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrum from '../components/BreadCrum.js/BreadCrum';
const Product = () => {
  const all_product=useContext(ShopContext);
  console.log(all_product)
  const productId=useParams();
  const product = all_product.find((e)=>e.id===Number(productId));

  return (
    <div >
      <BreadCrum product={product}/>
    </div>
  )
}

export default Product
