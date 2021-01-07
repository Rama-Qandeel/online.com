import React, { Component } from 'react'
import logo from "../img/icon-header.png"
const HomePage =()=> {
   
        return (
            <div>
        <header className="header">
      <div className="header__text-box">
     <div className="heading-primary">
     <h1 class="heading-primary">
     <img src={logo} alt="logo" class="header__logo" />
          <span class="heading-primary-main">Online store</span>
        </h1>
        <h3 class="heading-primary-sub">Login to your account</h3>
        <div class="section-btn">
        <a href="#" class="btn btn-green btn--animated">Register</a>
        <div className="heading-text-sub">
        <span class="login-page__separator-text">Already member?</span>
        </div>
        <a href="#" class="btn btn-green btn--animated">Login</a>
        </div>
         </div>   
      </div>
    </header>
    
            </div>
        )
    
}

export default HomePage;
