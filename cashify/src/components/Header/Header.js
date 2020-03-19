import React from 'react';
import './Header.css';
function Header(props){
    return(
        <div className="header">
        <div className="header__inner">
            <div className="header__logo">
                <img className="logo" src={require("../../assets/images/logo.svg")} alt="Burger_logo"/>
            </div>
             {/* <div></div> */}
            <div className="header__menu">
                <div className="header__menu-content">
                    <p>Home</p>
                    <p>Menu</p>
                    <p>Gallery</p>
                    <p>Testimonials</p>
                    <p>Contact Us</p>
                </div>
               
                <div className="header__menu-icons">
                    <img className="icons" src={require("../../assets/images/headerIcons/search.png")} alt="Search"/>
                    <img className="icons" src={require("../../assets/images/headerIcons/contact.png")} alt="contact"/>
                    <img className="icons" src={require("../../assets/images/headerIcons/store.png")} alt="store"/>
                </div>
                </div>
        </div>
        </div>
    ) 
}
export default Header;