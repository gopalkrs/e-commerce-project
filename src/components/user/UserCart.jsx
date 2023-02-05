import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartItem from './CartItem';


const loadRazorpay = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => {
      resolve(true);
    }
    script.onerror = () => {
      resolve(false);
    }
    document.body.appendChild(script);
  })
}


function UserCart() {

  const [addedItems, setAddedItems] = useState([]);
  const isLogged = useState(JSON.parse(localStorage.getItem('isLogged')));
  let grossItemsPrice = 0;

  const userid = localStorage.getItem('userId');
  const token = localStorage.getItem('userToken');

  const getCartItems = async () => {
    const data = await axios.get(`${process.env.REACT_APP_API_URL}/api/mycart/${userid}`);
    setAddedItems(data.data.data);
  }

  const onSuccess = async (rzp_data, orderId)=>{
    try{
      const data = await axios.put(`${process.env.REACT_APP_API_URL}/api/mycart`, {rzp_data: rzp_data, userid: userid},{
          'headers': {
            'authorization': `Bearer ${token}`
          }
    });
    window.location = '/';
    }catch(err){
      console.log(err);
    }
  }

  const displayRazorpay = async () => {

    const res = await loadRazorpay('https://checkout.razorpay.com/v1/checkout.js');

    if(!res){
      alert('Razorpay failed to load, seems like you aren\'t online!');
      return;
    }

    
    const totalpriceobject = {
      "totalprice": grossItemsPrice
    }
    const data = await axios.post(`${process.env.REACT_APP_API_URL}/api/payments`, totalpriceobject, {
      'headers': {
        'authorization': `Bearer ${token}`
      }
    });
    console.log(data);
    const rzpOrderId = data.data.data.id;
    const options = {
      key: process.env.RAZOR_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: data.data.data.amount.toString(), // 
      currency: data.data.data.currency,
      name: "Shopyard inc.",
      description: "Payment Transaction",
      image: "",
      order_id: data.data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response) {
        onSuccess({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature
          // alert(response.razorpay_payment_id),
          // alert(response.razorpay_order_id),
          // alert(response.razorpay_signature)
        },rzpOrderId);
        alert("Order completed.");
      }
    };
    const paymentObject = new window.Razorpay(options);
    console.log(paymentObject);
    paymentObject.open();
  }

  useEffect(() => {
    getCartItems();
  }, []);

  if(!isLogged) {
    return (
      <div className='UserCart'>
        <div className='usercart-inner-div'>
          <p className='user-not-logged'>User Not Logged In.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="UserCart">
      <h4>My Cart</h4>
      <div className='usercart-inner-div'>

        <div className='mycart'>
          <div>
            {
              addedItems?.map((item) => {
                const { price, date, totalno, itemid, totalprice, _id, ordered } = item;
                grossItemsPrice = grossItemsPrice + totalprice;
                return (
                  <CartItem key={_id} ordered={ordered} price={price} date={date} itemid={itemid} totalno={totalno} totalprice={totalprice} cartitemid={_id} />
                );
              })
            }
          </div>
        </div>
      </div>
      <div className={`${addedItems?.length ? "place-order-div" : "place-order-div-hide"}`}>
        <div className='total-amount'>
          <p>Total Amount</p>
          <p>&#8377;{Math.trunc(grossItemsPrice / 100) + "." + grossItemsPrice % 100} </p>
        </div>
        <button onClick={displayRazorpay}>Place Order</button>
      </div>
      {/* <div className={`${addedItems?.length===0 ? "place-order-div" : "place-order-div-hide"}`}>
        <p>No items added to the cart yet.</p>
      </div> */}
    </div>
  );
}

export default UserCart;
