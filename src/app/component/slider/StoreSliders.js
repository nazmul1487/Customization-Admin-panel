
import {useEffect, useState} from "react";
import {getSlider} from "../../api_service/sliderServices";
import SliderBoot from "./Slider";
import DemoSlider from "./DemoSlider";

const StoreSliders = ()=>{
    const storeId = 1;
    const [sliders, setSliders] = useState([])
    const fetchURL = "http://127.0.0.1:8000/api/slider-api"
    const getData = () =>
        fetch(`${fetchURL}/1/`)
            .then((res) => res.json())
    useEffect(() => {
        getData().then((sliders) => setSliders(sliders))
    }, [])
    console.log(sliders)
    return (
        <div>
            {sliders.map((slider) =>(
                <SliderBoot key={slider.id} name={slider.slider_name} image={slider.slider_Desk_img} />
            ))}
        </div>
    )
};
export default StoreSliders;
