import React from 'react';
import '../assets/LoginSuccess.css';
import Img from '../assets/Img/tick-icon.png';

const LoginSuccess = () => {
  return (
    <div className='login-card'>
      <div className='row'>
        <div className='col-md-6 mt-5 text-center'>
          <div className='card-login'>
            <div className='card-body'>
              <img src={Img} className='image' alt="Tick icon" />
              <h3 className='login-text'>Great!</h3>
              <p className='login-ac'>Your account has been created successfully</p>
              <button className='home'>Back to Home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSuccess;
