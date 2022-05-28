import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import loginsvg from '../../images/loginsvg.svg';
function SignupPage() {

    const [signupData, setsignupData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [loginMessage, setLoginMessage] = useState();


    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setsignupData({ ...signupData, [name]: value });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //const postSignup = { ...signupData, id: uuidv4() };
        try {
            const promiseData = await axios.post(`/api/auth/signup`, signupData);
            setLoginMessage(promiseData.data.message);
            if(promiseData){
                setsignupData({
                    name: "",
                    password: "",
                    email: ""
                });
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="SigninPage">
            <div className="main-div">
                <img src={loginsvg} alt='login-svg' />
                <div className="login-signup-form">
                    <div className="inner-div">
                        <div className='login-signup-toggle'>
                            <h3>Signup</h3>
                            <Link to='/auth/login'>
                                <p>Switch to Login</p>
                            </Link>
                        </div>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="input-block">
                                <FontAwesomeIcon className='signin-icons' icon={faUser} />
                                <input type="text" required
                                    placeholder='Your Name'
                                    autoComplete="off"
                                    onChange={inputHandler}
                                    name="name" id="name"
                                    value = {signupData.name} />
                            </div>

                            <div className="input-block">
                                <FontAwesomeIcon className='signin-icons' icon={faEnvelope} />
                                <input type="email" required
                                    placeholder='Email'
                                    autoComplete="off"
                                    onChange={inputHandler}
                                    name="email" id="email"
                                    value = {signupData.email} />
                            </div>

                            <div className="input-block">
                            <FontAwesomeIcon className='signin-icons' icon={faLock} />
                                <input type="password" required
                                    placeholder='Password'
                                    autoComplete="off"
                                    onChange={inputHandler}
                                    name="password" id="password"
                                    value = {signupData.password} />
                            </div>
                            <div className="button-class">
                                <input className="submit-btn" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                    <div className='error-message'>
                        <p>{loginMessage}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SignupPage;
