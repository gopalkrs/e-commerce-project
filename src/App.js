import React, { useState } from 'react';
import './styles/app.scss';
import { Route, Routes } from 'react-router-dom';
import { Header, Homepage, Sidebar, Footer, UserCart, BeautyProducts, ProductDescription, SnacksProducts, CleaningProducts, FoodgrainProducts, FruitProducts, LoginPage, SignupPage } from './components'
import { ProductProvider } from "./components/contexts/productContext"

function App() {
  const [navOpen, setNavOpen] = useState(false);
  
  const sidebarHandler=()=>{
    setNavOpen(false);
  }

  return (
    <div className="app" >
      <div className="Homepage">
        <ProductProvider>
          <Header navOpen={navOpen} setNavOpen={setNavOpen} sidebarHandler={sidebarHandler}/>
          <Sidebar navOpen={navOpen} sidebarHandler={sidebarHandler}/>
          <div className='routes' onClick={sidebarHandler}>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/fruits-vegetables' element={<FruitProducts />} />
              <Route path='/fruits-vegetables/:itemid' element={<ProductDescription />} />
              <Route path='/foodgrains-spices' element={<FoodgrainProducts />} />
              <Route path='/foodgrains-spices/:itemid' element={<ProductDescription />} />
              <Route path='/snacks-bakery' element={<SnacksProducts />} />
              <Route path='/snacks-bakery/:itemid' element={<ProductDescription />} />
              <Route path='/beauty-healthcare' element={<BeautyProducts />} />
              <Route path='/beauty-healthcare/:itemid' element={<ProductDescription />} />
              <Route path='/cleaning-household' element={<CleaningProducts />} />
              <Route path='/cleaning-household/:itemid' element={<ProductDescription />} />
              <Route path='/auth/signup' element={<SignupPage />} />
              <Route path='/auth/login' element={<LoginPage />} />
              <Route path='/mycart' element={<UserCart />} />
            </Routes>
          </div>
          <div onClick={sidebarHandler}>
            <Footer />
          </div>
        </ProductProvider>
      </div>
    </div>
  );
}

export default App;
