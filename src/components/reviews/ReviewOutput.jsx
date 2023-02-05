import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faTrash, faStar } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import moment from 'moment'


function ReviewOutput({comment, rating, userid, reviewid, date, productid}){

    const [name, setName] = useState('');

    const getData = async ()=>{
        try{
            const data = await axios.get(`${process.env.REACT_APP_API_URL}/api/auth/${userid}`);
            setName(data.data.data);
        }catch(err){
            console.log(err);
        }
    }
    const deleteReviewHandler = async ()=>{
        let uId = localStorage.getItem('userId');
        try{
            const data = await axios.delete(`${process.env.REACT_APP_API_URL}/api/reviews/${productid}/${uId}/${reviewid}`);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getData();
    },[]);

    return (
        <div className="ReviewOutput">
            <div>
                <div className="name">
                    <p><FontAwesomeIcon icon={faCircleUser} /> {name}</p>
                    <div className='delete-icon'>
                        <button onClick={deleteReviewHandler}><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>
                <div className="rating-comment">
                    <p><FontAwesomeIcon icon={faStar} /> {rating}/5</p>
                    <p>{comment}</p>
                </div>
                <div className='posted-time'>
                    <p>{moment(date).startOf("ss").fromNow()}</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewOutput;