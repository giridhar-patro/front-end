import React from 'react';
import { FcGoogle } from "react-icons/fc";
import '../assets/Register.css';
import loginImg from '../assets/Img/login-img.jpg';
import { Link } from 'react-router-dom';

const RegisterComponent = () => {
  return (
    <div className='container'>
      <div className='container-left'></div>
      <div className='container-right'></div>
      
      <div className='card-form'>
        <div className='card-image'>
          <img src={loginImg} alt="Login" className="img-fluid" />
        </div>
        <div className="form-container">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">User name</label>
            <input type="text" className="form-control" id="exampleFormControlTextarea1" placeholder="Enter your username"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleFormControlTextarea1" placeholder="Enter your password"/>
          </div>
          <div className='check-text mb-3'>
            <input type='checkbox' id='termsCheckbox' />
            <label htmlFor='termsCheckbox' className='form-text'>I agree with <span>Terms of Service</span> and <span>Privacy Policy</span></label>
          </div>

    
            <p className='signin-text mt-3'>Or sigin with</p>


            <div className="Google-image text-center mt-2 ">
                                    <FcGoogle className="icon-google" style={{ fontSize: '2rem' }}/>
            </div>


            <div className="foot text-center mt-3">
                                    <p>Have an Account?</p>
                                    <Link to ='/login' style={{textDecoration:'none'}}><p className="foot-reg" >Sign In</p></Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;
