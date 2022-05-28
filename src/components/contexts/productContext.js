import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export function ProductProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);

    const userid = localStorage.getItem('userId');
    const getProducts = async () => {
        const data = await axios.get(`/api/mycart/${userid}`);
        setCart(data.data.data);
    }

    const searchProductHandler = async(e)=>{
        const searchtext = e.target.value;
        if(!searchtext){
            setSearchResult(false);
        }else{
            try{
                const data = await axios.get(`/api/filters/search?text=${searchtext}`);
                setSearchResult(data.data.data);
                setShowResult(true);
            }catch(err){
                console.log(err);
            }
        }
    }

    useEffect(()=>{
        getProducts();
    },[]);
    

    return (
        <ProductContext.Provider value={{ cartsize: cart?.length, searchProductHandler: searchProductHandler, searchResult: searchResult, setSearchResult: setSearchResult, setShowResult: setShowResult, showResult: showResult }}>{children}</ProductContext.Provider>
    );
}

export default ProductContext;