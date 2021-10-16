import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const { img, name, seller, price,stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-item">
                <h4 className="product-name">{name}</h4>
                <br />
                <h4>By: {seller}</h4>
                <h4>Price: ${price}</h4>
                <h4>Only {stock} left in stock (Order now).</h4>
                <button className="main-btn"><FontAwesomeIcon icon={faShoppingCart}/>Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;