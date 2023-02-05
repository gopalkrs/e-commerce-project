import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { ProductCard } from './'
import ProductContext from "./contexts/productContext";



function Homepage() {

  const [products, setProducts] = useState([]);
  const {searchResult, setSearchResult, showResult, setShowResult} = useContext(ProductContext);

  const getProductHandler = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/filters/popular`);
    setProducts(res.data.data);
    console.log(res);
  }

  useEffect(() => {
    getProductHandler();
  }, []);

  useEffect(() => {
    setSearchResult(searchResult);
    console.log(searchResult);
    setShowResult(showResult);
  }, [searchResult]);

  if(showResult){
    return (
      <div className='products-list-div'>
        <h4>Results..</h4>
        <div className='products-list'>
          {
            searchResult?.map((item) => {
              const { name, _id, price, quantity, image, category } = item;
              return (
                <NavLink to={`/${category}/${_id}`} className='product-card-links' key={_id}>
                  <ProductCard name={name} itemid={_id} price={price} quantity={quantity} image={image} key={_id} />
                </NavLink>
              );
            })
          }
        </div>
      </div>
    );
  }


  return (
    <div className="Homepage">
      <div className='img-carousel-div'>
        <Carousel autoPlay infiniteLoop interval={4000} showArrows={false} showThumbs={false} stopOnHover >
          <NavLink to={`fruits-vegetables`} className='link-product-page'>
            <div>
              <img alt='grocery1' src='https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg' />
              <p className='image-title'>Fruits and Vegetables</p>
            </div>
          </NavLink>
          <NavLink to={`/foodgrains-spices`} className='link-product-page'>
            <div>
              <img alt='grocery1' src='https://www.aashirvaad.com/img/banner_img.jpg' />
              <p className='image-title'>Foodgrains and Spices</p>
            </div>
          </NavLink>
          <NavLink to={`/snacks-bakery`} className='link-product-page'>
            <div>
              <img alt='grocery1' src='https://assets.bonappetit.com/photos/5aeca0f6abfd55654bd1e6d8/master/pass/british-snacks.jpg' />
              <p className='image-title'>Snacks and Bakery</p>
            </div>
          </NavLink>
          <NavLink to={`/beauty-healthcare`} className='link-product-page'>
            <div>
              <img alt='grocery1' src='https://cdn.sanity.io/images/92ui5egz/production/e800a8eabc6f17a0eaed1bf6621b46aefa57b8cb-990x557.jpg?w=800&h=450&auto=format' />
              <p className='image-title'>Beauty and Healthcare</p>
            </div>
          </NavLink>
          <NavLink to={`/cleaning-household`} className='link-product-page'>
            <div>
              <img alt='grocery5' src='https://i2-prod.gloucestershirelive.co.uk/incoming/article2388909.ece/ALTERNATES/s1200/1_Poundland-Promotion.jpg' />
              <p className='image-title'>Cleaning and Household</p>
            </div>
          </NavLink>
        </Carousel>
      </div>
      <div className='products-list-div'>
        <h4>Popular Products</h4>
        <div className='products-list'>
          {
            products?.map((item) => {
              const { name, _id, price, quantity, image, category } = item;
              return (
                <NavLink to={`${category}/${_id}`} className='product-card-links' key={_id}>
                  <ProductCard name={name} itemid={_id} price={price} quantity={quantity} image={image} key={_id} />
                </NavLink>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Homepage;
