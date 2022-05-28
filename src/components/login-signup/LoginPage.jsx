import React, { useState } from 'react';
import axios from 'axios';
import loginsvg from '../../images/loginsvg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


function LoginPage() {

    const [loginData, setloginData] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState();


    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setloginData({ ...loginData, [name]: value });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //const postSignup = { ...loginData, id: uuidv4() };
        let promiseData;
        try {
            promiseData = await axios.post(`/api/auth/login`, loginData);
            const {message} = promiseData.data;
            setMessage(message);
            const {_id, name} = promiseData.data.data.existingUser;
            const {token} = promiseData.data.data;
            localStorage.setItem('userName', name);
            localStorage.setItem('userId', _id);
            localStorage.setItem('isLogged', true);
            localStorage.setItem('userToken', token);
            window.location.replace("/");
        } catch (err) {
            const {message} = promiseData.data;
            setMessage(message);
            console.log(err);
        }
    }

    const demoAccountHandler = async (e)=>{
        e.preventDefault();
        const demoPost = {
            email : "asd@gmail.com",
            password : "Asdf"
        }
        let promiseData;
        try {
            promiseData = await axios.post(`/api/auth/login`, demoPost);
            const {message} = promiseData.data;
            setMessage(message);
            const {_id, name} = promiseData.data.data.existingUser;
            const {token} = promiseData.data.data;
            localStorage.setItem('userName', name);
            localStorage.setItem('userId', _id);
            localStorage.setItem('isLogged', true);
            localStorage.setItem('userToken', token);
            window.location.replace("/");
        } catch (err) {
            const {message} = promiseData.data;
            setMessage(message);
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
                            <h3>Login</h3>
                            <Link to='/auth/signup'>
                                <p>Switch to Signup</p>
                            </Link>
                        </div>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="input-block">
                                <FontAwesomeIcon className='signin-icons' icon={faEnvelope} />
                                <input type="email" required
                                    placeholder='Email'
                                    autoComplete="off"
                                    onChange={inputHandler}
                                    name="email" id="email"
                                    value={loginData.email} />
                            </div>

                            <div className="input-block">
                                <FontAwesomeIcon className='signin-icons' icon={faLock} />
                                <input type="password" required
                                    placeholder='Password'
                                    autoComplete="off"
                                    onChange={inputHandler}
                                    name="password" id="password"
                                    value={loginData.password} />
                            </div>
                            <div className="button-class">
                                <input className="submit-btn" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                    <form action="/" onSubmit={demoAccountHandler}>
                        <button className='demo-account-login-button'>Login From Demo Account</button>
                    </form>
                    <div className='error-message'>
                        <p>{message}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LoginPage;
