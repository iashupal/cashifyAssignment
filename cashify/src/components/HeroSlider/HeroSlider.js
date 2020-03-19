import React, { Component } from "react";
import Header from '../Header/Header';
import { Carousel } from "react-responsive-carousel";
import "./HeroSlider.css";
import '../Header/Header.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class HeroSlider extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        swipeable={true}
        showIndicators={false}
        emulateTouch={true}
        infiniteLoop={true}
        className="hero-carousel"
      >
      
        <div className="hero-carousel__outer hero-bg-slider-1">
        <div className="header__wrapper">
            <Header />
            <div className="hero-carousel__inner-content">
                  <h1>Party Time!</h1>
                  <div className="bgText__wrapper">
                  <img className="hero-carousel__content-image" src={require("../../assets/images/bgText/bgText1.png")} alt="Text_background"/>
                  <p>Buy any 2 burgers and get 1.5L Pepsi Free</p>
                  </div>
                  <button>order now</button>
              </div>
          </div>
          <div className="hero-carousel__inner">
              <img
                src={require("../../assets/images/banner/banner1.jpg")}
                alt="slider"
                className="hero-carousel__image"
              />
              
          </div>
        </div>
        <div className="hero-carousel__outer hero-bg-slider-1">
        <Header/>
        <div className="hero-carousel__inner-content">
                  <h1>Party Time!</h1>
                  <div className="bgText__wrapper">
                  <img className="hero-carousel__content-image" src={require("../../assets/images/bgText/bgText1.png")} alt="Text_background"/>
                  <p>Buy any 2 burgers and get 1.5L Pepsi Free</p>
                  </div>
                  <button>order now</button>
              </div>
          <div className="hero-carousel__inner">
              <img
                src={require("../../assets/images/banner/banner2.jpg")}
                alt="slider"
                className="hero-carousel__image"
              />
          </div>
        </div>
        <div className="hero-carousel__outer hero-bg-slider-2">
        <Header/>
        <div className="hero-carousel__inner-content">
                  <h1>Party Time!</h1>
                  <div className="bgText__wrapper">
                  <img className="hero-carousel__content-image" src={require("../../assets/images/bgText/bgText1.png")} alt="Text_background"/>
                  <p>Buy any 2 burgers and get 1.5L Pepsi Free</p>
                  </div>
                  <button>order now</button>
              </div>
          <div className="hero-carousel__inner">
              <img
                src={require("../../assets/images/banner/banner1.jpg")}
                alt="slider"
                className="hero-carousel__image"
              />
          </div>
        </div>
      </Carousel>
    );
  }
}

export default HeroSlider;
