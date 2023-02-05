import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function CartItem({ price, date, itemid, totalno, totalprice, cartitemid, ordered}) {

  const [items, setItems] = useState([]);

  const getProductData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/${itemid}`);
      setItems(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  const removeCartItemHandler = async ()=>{
    let uId = localStorage.getItem('userId');
    try{
        const promisedata = await axios.delete(`${process.env.REACT_APP_API_URL}/api/mycart/${uId}/${cartitemid}`);
        alert(promisedata.data.message);
    }catch(err){
        console.log(err);
    }
}

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="CartItem">
      <div>
          <div className='cartitem-box-div'>
            <div className='remove-item-btn-div'>
              <button onClick={removeCartItemHandler} className='remove-item'><FontAwesomeIcon icon={faXmark} /></button>
            </div>
            
            <div className='description-div'>
            <Link to={`/${items?.category}/${itemid}`} className='product-links'>
              <div>
                <img alt='prod-avatar' src={items?.image} />
                <p className='product-name'>{items?.name}</p>
              </div>
              </Link>
              <div>
                <div className='product-info'>
                  <p className='info-header'>Qty</p>
                  <p className='info-value'>{totalno}</p>
                </div>
                <div>
                  <p className='info-header'>Price</p>
                  <p className='info-value'>&#8377; {Math.trunc(totalprice / 100) + "." + totalprice % 100}</p>
                </div>
                
              </div>
            </div>
          </div>
      </div>
    </div >
  );
}

export default CartItem;
