import React, {Component} from 'react';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import Heading from '../components/Heading/Heading'
import Dishes from '../components/Dishes/Dishes';
import food1 from '../assets/images/food1.svg';
import food2 from '../assets/images/food2.svg';
import food3 from '../assets/images/food3.svg';
import food4 from '../assets/images/food4.svg';
import food5 from '../assets/images/food5.svg';
import fries from '../assets/images/fries.svg';
import './MainLayout.css';
import CenterSlider from '../components/CenterSlider/CenterSlider';
import CoverFlowSlider from '../components/CoverflowSlider/CoverFlowSlider';
import Testinomial from '../components/Testimonial/Testimonial';
import TestinomialContent from '../components/TestinomialContent/TestinomialContent';


class MainLayout extends Component{
    render(){
        return(
            <div>
                <HeroSlider />
                <Heading heading="Want To Eat?" information="Try our Most Delicious food and it usually take minutes to deliver!"/>
                <div className="dishes__wrapper">
                    <Dishes DishImg={food5} name="Burger" foodName="BURGER"/>
                    <Dishes DishImg={food4} name="pizza" foodName="PIZZA"/>
                    <Dishes DishImg={fries} name="Fries" foodName="FRIES"/>
                    <Dishes DishImg={food1} name="Cupcake" foodName="CUPCAKE"/>
                    <Dishes DishImg={food3} name="Sandwich" foodName="SANDWICH"/>
                    <Dishes DishImg={food2} name="Spagheti" foodName="SPAGHETI"/>
                </div>
                <CoverFlowSlider /> 
                <Heading heading="Client Testimonials" information="Try our Most Delicious food and it usually take minutes to deliver!"/>
                <div className="testinomial__wrapper">
                    <Testinomial/>
                    <TestinomialContent />
                </div>
            </div>
        )
    }
}

export default MainLayout;