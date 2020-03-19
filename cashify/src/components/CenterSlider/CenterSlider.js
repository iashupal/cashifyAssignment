import React, { Component } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class CenterSlider extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        cenetrMode: true,
        centerPadding: '40px',
        slidesToScroll: 1,
        focusOnSelect: true
      };
      return (
        <Slider {...settings}>
          <div className="testinomial__slider">
            <h3>dfghjkl</h3>
            <img src={require("../../assets/images/dishes/img1.svg")}/>
          </div>
          <div>
            <h3>2</h3>
            <img src={require("../../assets/images/dishes/img2.svg")}/>
          </div>
          <div>
            <h3>3</h3>
            <img src={require("../../assets/images/dishes/img3.svg")}/>
          </div>
          <div>
            <h3>4</h3>
            <img src={require("../../assets/images/dishes/img4.svg")}/>
          </div>
          <div>
            <h3>5</h3>
            <img src={require("../../assets/images/dishes/img4.svg")}/>
          </div>
          <div>
            <h3>6</h3>
            <img src={require("../../assets/images/dishes/img4.svg")}/>
          </div>
        </Slider>
      );
    }
  }
  export default CenterSlider;
