import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function ProductCard({ name, price, image, itemid, quantity, categoryType }) {

    const priceInr = Math.trunc(price / 100) + "." + price % 100;
    return (
        <div className="ProductCard">
            <div className='main-div'>
                <div className='item-image'>
                    <img src={image} alt='product_avatar' />
                </div>
                <div className='item-data'>
                    <p className='item-name'>{name}</p>
                    <div className='price-quantity'>
                        <p>&#8377;{priceInr}</p>
                        <p>{quantity}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <button className='add-to-cart'>Add to Cart <FontAwesomeIcon icon={faCartPlus} /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
