import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ReviewOutput} from '../'

function ReviewRatings({ productid }) {

    const isLogged = JSON.parse(localStorage.getItem('isLogged'));
    const userid = localStorage.getItem('userId');
    const [message, setMessage] = useState("");
    const [reviewsData, setReviewsData] = useState([]);

    const [postReview, setPostReview] = useState({
        review: "",
        rating: "",
        productid: productid,
        userid: userid
    })
    const handlePosts = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPostReview({ ...postReview, [name]: value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if (isLogged) {
            if (!postReview.review || !postReview.rating) {
                alert("Please write something before submitting!");
            }
            else {
                try {
                    const token = localStorage.getItem('userToken');

                    const promiseData = await axios.post(`${process.env.REACT_APP_API_URL}/api/reviews`, postReview, {
                        'headers': {
                            'authorization': `Bearer ${token}`
                        }
                    });
                    setMessage(promiseData.data.message);
                    if(promiseData.data){
                        setPostReview({
                            review: "",
                            rating: "",
                            userid: userid,
                            productid: productid
                        });
                    }
                    setTimeout(()=>setMessage(""), 2000);

                }catch(err) {
                    console.log(err);
                }
            }
        }
        else{
            alert("Kindly login before posting!");
        }
    }

    const getAllReviews = async()=>{
        const data = await axios.get(`${process.env.REACT_APP_API_URL}/api/reviews/${productid}`);
        setReviewsData(data.data.data);
    }

    useEffect(()=>{
        getAllReviews();
    },[reviewsData]);

    return (
        <div className='ReviewRatings'>
            <div>
                <h4 className='reviews-ratings-header'>Reviews and Ratings</h4>
                <form action="/" onSubmit={submitHandler}>
                    <div className="rating-div">
                        <label htmlFor="rating">Rating: </label>
                        <select name="rating" id="rating" className="rating-dropdown" onChange={handlePosts} value={postReview.rating}>
                            <option value=""></option>
                            <option value="1">&#11088;</option>
                            <option value="2">&#11088;&#11088;</option>
                            <option value="3">&#11088;&#11088;&#11088;</option>
                            <option value="4">&#11088;&#11088;&#11088;&#11088;</option>
                            <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088;</option>
                        </select>
                    </div>
                    <div className="review-div">
                        <label htmlFor="review">Review: </label> <br />
                        <textarea rows="4" cols="30" id="review" name="review" value={postReview.review} onChange={handlePosts}></textarea>
                    </div>
                    <div className="submit-btns-div">
                        <button>Submit</button>
                        <p>{message}</p>
                    </div>
                </form>
            </div>
            <div className='list-of-reviews'>
                {
                    reviewsData.map((rev)=>{
                        const {review, rating, userid, _id, date} = rev;
                        return(
                            <ReviewOutput comment={review} key={_id} rating={rating} date={date} userid={userid} reviewid={_id} productid={productid} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ReviewRatings;