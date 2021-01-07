import React, { Component } from "react";
import logo from "../img/icon-header.png";
import shops from "../img/shops.png";
import add from "../img/add-to-cart.png";
import delivary from "../img/delivary.png";
import build from "../img/build.png";
const HomePage = () => {
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
              <a href="#" class="btn btn-green btn--animated">
                Register
              </a>
              <div className="heading-text-sub">
                <span class="login-page__separator-text">Already member?</span>
              </div>
              <a href="#" class="btn btn-green btn--animated">
                Login
              </a>
            </div>
          </div>
        </div>
      </header>

      <main class="main">
        <div class="container">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondry">How it works - Four Easy steps</h2>
          </div>

          <ul class="row login-page__steps-list">
            <li class="col-md-4 login-page__steps-item feature-box">
              <div class="login-page__steps-img">
                <img src={build} alt="store" class="shop__logo" />
              </div>
              <h4 class="login-page__steps-title">
                Create Own Store
              </h4>
              <p class="login-page__steps-text" >
                You able create own store online.
              </p>
            </li>

            <li class="col-md-4 login-page__steps-item feature-box">
              <div class="login-page__steps-img">
                <img src={shops} alt="store" class="shop__logo" />
              </div>
              <h4 class="login-page__steps-title" >
                Select Your Favorite Store
              </h4>
              <p class="login-page__steps-text" >
                Based on your location, you can select your favorite store.
              </p>
            </li>

            <li class="col-md-4 login-page__steps-item feature-box">
              <div class="login-page__steps-img">
                <img src={add} alt="store" class="shop__logo" />
              </div>
              <h4 class="login-page__steps-title" >
                Add Items
              </h4>
              <p class="login-page__steps-text" >
                Add items to your cart. Just as if you're in the store yourself.
              </p>
            </li>

            <li class="col-md-4 login-page__steps-item feature-box">
              <div class="login-page__steps-img">
                <img src={delivary} alt="store" class="shop__logo" />
              </div>
              <h4 class="login-page__steps-title" >
                Place Order & Enjoy
              </h4>
              <p class="login-page__steps-text" >
                Place your order and we will take care of the rest.
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
