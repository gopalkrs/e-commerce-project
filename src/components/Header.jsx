import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faSearch, faBagShopping, faListSquares, faCircleUser, faCartFlatbed } from '@fortawesome/free-solid-svg-icons'
import ProductContext from "./contexts/productContext";

function Header({ navOpen, setNavOpen }) {

  const {cartsize, searchProductHandler, searchResult} = useContext(ProductContext);


  const [isLogged, setIsLogged] = useState(JSON.parse(localStorage.getItem('isLogged')));

  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem('isLogged')));
  }, []);

  const navButtonHandler = () => {
    setNavOpen(!navOpen);
  }

  const logoutHandler = () => {
    localStorage.setItem('userName', null);
    localStorage.setItem('userId', null);
    localStorage.setItem('isLogged', false);
    window.location.reload(false);
  }

  if (isLogged) {
    return (
      <div>
        <div className='navbar'>
          <div className='navbar-items'>
            <Link to="/" className='header-link'>
              <h1>shopyard <FontAwesomeIcon icon={faCartFlatbed} /> </h1>
            </Link>
            <div className='user-logged-div'>
              <div className='inner-div'>
                <p><FontAwesomeIcon icon={faCircleUser} /> {localStorage.getItem('userName')}</p>
                <div className='user-logged-buttons'>
                  <div className='cart'>
                    <Link to='/mycart'>
                      <button> <FontAwesomeIcon icon={faBagShopping} size="2x" /> {cartsize} </button>
                    </Link>
                  </div>
                  <div className='logout-button'>
                    <button onClick={logoutHandler}>Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='search-input'>
              <input type="text" placeholder='Search for Products..' onChange={searchProductHandler} />
            </div>
          </div>
          <div className='products-cart'>
            <div className='all-categories'>
              <button onClick={navButtonHandler}>All Categories <FontAwesomeIcon icon={faListSquares} /></button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='navbar'>
        <div className='navbar-items'>
          <Link to="/" className='header-link'>
            <h1>shopyard <FontAwesomeIcon icon={faBasketShopping} /> </h1>
          </Link>
          <div className='login-signup-buttons'>
            <div>
              <Link to='/auth/login'>
                <button>Login</button>
              </Link>
              <Link to='/auth/signup'>
                <button>Signup</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className='search-input'>
            <input type="text" placeholder='Search for Products..' />
          </div>
        </div>
        <div className='products-cart'>
          <div className='all-categories'>
            <button onClick={navButtonHandler}>All Categories <FontAwesomeIcon icon={faListSquares} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
