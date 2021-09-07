import React from "react";
import SlickDemo from "../slider/Slider";
import HomeBody from "./HomeBody";
import HomePageBrand from "./HomePageBrand";
import OurService from "./OurService";
import IntroEcom from "./IntroEcom";
import WorkWith from "./WorkWith";
import StoreSliders from "../slider/StoreSliders";
import DemoSlider from "../slider/DemoSlider";
import SliderBoot from "../slider/Slider";

const  HomePage = () =>{
    return (
          <div style={{padding:0}} className="container">
            <SliderBoot />
            {/*<br />*/}
            <HomeBody />
            {/*<hr />*/}
            <IntroEcom />
            {/*<hr />*/}
            <HomePageBrand />
            {/*<hr />*/}
            <WorkWith />
            {/*<hr />*/}
            <OurService />
          </div>

    );
}
export default HomePage;
