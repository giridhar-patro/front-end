import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import loginImg from '../assets/Img/login.jpg';
import {Link} from 'react-router-dom';

const LoginComponent = () => {
    return (
        <div className='container-fluid'>
            <div className='row mt-5'>
                {/* Left side - Image */}
                <div className='col-md-6 col-sm-12 p-0 mt-5'>
                    <img src={loginImg} alt="Login" className="img-fluid h-100 w-100 object-fit-cover" />
                </div>

                {/* Right side - Login Form */}
                <div className='col-md-6 '>
                    <div className='card border-0'>
                        <div className='card-body'>
                            <form id="registrationForm">
                                <div className='form-group mt-5'>
                                    <h1 className="text-center">Login to your account</h1>
                                    <p className="text-center">Please sign in to your account</p>
                                    <label htmlFor="email" className="mt-2">
                                        Email Address
                                    </label>
                                    <div className="input-icon-wrapper">
                                        <span className="input-icon">✉️</span>
                                        <input type='text' className='form-control' id="email" placeholder="Enter your email"></input>
                                    </div>
                                </div>
                                <div className='form-group mt-3'>
                                    <label htmlFor="password">Password</label>
                                    <div className="input-icon-wrapper">
                                        <span className="input-lock">
                                            <FontAwesomeIcon icon={faLock} />
                                        </span>
                                        <input type='password' className='form-control' id="password" placeholder="Enter your password"></input>
                                        <span className="input-icons">
                                            <AiOutlineEye />
                                        </span>
                                    </div>
                                    <p className="text-pass">Forget Password?</p>
                                </div>

                                <Link to ="/loginsuccess" ><button className="btn btn-success  " style={{ borderRadius: '10px' }}>Login</button></Link>
                                
                                <p className="signin-text mt-3">Or sign in with</p>

                                <div className="Google-image text-center mt-2 ">
                                    <FcGoogle className="icon-google" style={{ fontSize: '2rem' }}/>
                                </div>

                                <div className="foot text-center mt-3">
                                    <p className="mb-0">Don't have an Account?</p>
                                    <Link to ='/register' style={{textDecoration:'none'}}><p className="foot-reg" >Register</p></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;