import React from 'react';
import './Product.css'
 
const Product = ({product, handleAddToCart}) => {
    // console.log(props)
    // const {product, handleAddToCart} =props
    const {name, img, seller, price, ratings} = product;
    // console.log(props.product)
  
    return (
        <div className='product'>
           
            <img src={img} alt="" />
            <div className="product-info">
            <p className='product-name'>{name}</p>
            <p>Price : ${price}</p>
            <p><small>Seller : {seller}</small></p>
            <p><small>Ratings : {ratings} stars</small></p>
</div>
<button onClick={() => handleAddToCart(product)} className='btn-cart'>Add to Cart</button>
</div>

    );
};

export default Product;