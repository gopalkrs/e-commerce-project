import React, { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useParams, NavLink } from 'react-router-dom'
import axios from 'axios';
import { ReviewRatings, ProductCard } from '../'
import ProductContext from "../contexts/productContext";



function ProductDescription(props) {

  const [items, setItems] = useState([]);
  const { itemid } = useParams();
  const userid = localStorage.getItem('userId');
  const {searchResult, setSearchResult, showResult, setShowResult} = useContext(ProductContext);

  const [cartItems, setCartItems] = useState({
    userid: userid,
    price: "",
    itemid: itemid,
    totalno: ""
  });

  const totalNoHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setCartItems({...cartItems, [name]: value});
  }

  const addToCartHandler = async (e)=>{
    e.preventDefault();
    if(localStorage.getItem('isLogged')){
      if(cartItems.totalno<=0){
        alert("Kindly Add Items to your cart!");
      }
      else{
        try{
          const token = localStorage.getItem('userToken');
          const addedItem = await axios.post(`/api/mycart`, cartItems, {
            'headers': {
                'authorization': `Bearer ${token}`
            }
          });
        }catch(err){
          console.log(err);
        }
      }
    }
    else{
      alert("Kindly login before adding to the cart.");
    }
  }



  const getProductData = async () => {
    try {
      const res = await axios.get(`/api/products/${itemid}`);
      setItems(res.data.data);
      setCartItems({...cartItems, price: res.data.data.price});
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    setSearchResult(searchResult);
    console.log(searchResult);
    setShowResult(showResult);
  }, [searchResult]);

  

  return (
    <div>
      <div className='paths'>
        <p><NavLink to='/'>HOME</NavLink> &#8827; <NavLink to={`/${items?.category}`}>{items?.category}</NavLink> &#8827;</p>
      </div>
      <div className='ProductDescription'>
        <div className='description-price-img'>
          <div className='description-img'>
            <img src={items?.image} alt='product_avatar' />
          </div>
          <div className='description-price'>
            <p className='item-name'>{items?.name}</p>
            <div className='price-quantity'>
              <p className='price'>Price : &#8377;{Math.trunc(items?.price / 100) + "." + items?.price % 100}</p>
              <p className='quantity'>{items?.quantity}</p>
            </div>
            <div className='adding-items-to-cart'>
              <form action='/' onSubmit={addToCartHandler}>
                <div className='add-remove'>
                  <input size="1" name='totalno' value={cartItems.totalno} onChange={totalNoHandler} />
                </div>
                <div>
                  <button type='submit' className='add-to-cart'>Add to Cart <FontAwesomeIcon icon={faCartPlus} /> </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='description-about'>
          <h4>About the product</h4>
          <p>{items?.description}</p>
        </div>
      </div>
      <ReviewRatings productid={itemid} />
    </div>
  );
}

export default ProductDescription;
