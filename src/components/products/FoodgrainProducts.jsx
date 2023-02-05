import React,{useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {ProductCard} from '../'

function FoodgrainProducts() {

  const [items, setItems] = useState([]);
  const getProductData = async()=>{
    try{
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/?category=foodgrains-spices`);
      setItems(res.data.data);
    }catch(err){
      console.log(err);
    }
  }

  const handleProductsFilter = async (e)=>{
    if(e.target.value==="1"){
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/filters/price/?category=foodgrains-spices`);
      setItems(res.data.data);
      console.log(res);
    }
    if(e.target.value==="2"){
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/filters/ratings/?category=foodgrains-spices`);
      setItems(res.data.data);
      console.log(res);
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
  
  }, [items]);

  return (
    <div className="FoodgrainProducts">
      <div className='paths'>
        <p><NavLink to='/'>HOME</NavLink> &#8827;Foodgrains-Spices</p>
      </div>
      <div className='product-filters'>
        <label>
          Filter
          <select onChange={handleProductsFilter}>
            <option value="">Select</option>
            <option value="1">by Price</option>
            <option value="2">by Popularity</option>
          </select>
        </label>
      </div>
      <div className='grocery-items-list'>
        {items?.map((item)=>{
          const {name, _id, price, quantity, image} = item;
          return(
            <NavLink to={`/foodgrains-spices/${_id}`} className='product-card-links' key={_id}>
              <ProductCard name={name} itemid={_id} price={price} quantity={quantity} image={image} key={_id}  />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default FoodgrainProducts;
