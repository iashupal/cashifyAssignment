import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import './CoverflowSlider.css';

class CoverFlowSlider extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          active: 0
        };
    }
    render(){
        return(
            <div className="coverflow__slider">
            <StyleRoot>
            <Coverflow
                width="100%"
                height={480}
                displayQuantityOfSide={5}
                navigation
                infiniteScroll
                active={this.state.active}
                enableHeading
                media={{
                    '@media (max-width: 900px)': {
                    // width: '1200px',
                    // height: '300px'
                    },
                    '@media (min-width: 900px)': {
                    // width: '1200px',
                    height: '600px'
                    }
                }}
                >
                <div className="coverflow__content">
                    <img src={require("../../assets/images/dishes/img1.svg")}/>
                    <h4>Free shipping on first order</h4>
                    <p>Sign up for uploaded and get free shipping</p>
                </div>
                <img src={require("../../assets/images/dishes/img1.svg")}/>
                <img src={require("../../assets/images/dishes/img2.svg")}/>
                <img src={require("../../assets/images/dishes/img3.svg")}/>
                <img src={require("../../assets/images/dishes/img4.svg")}/>
            </Coverflow>
            </StyleRoot>
            </div>
        )
    }
}
export default CoverFlowSlider;