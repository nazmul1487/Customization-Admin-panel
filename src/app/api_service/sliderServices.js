import axios from "axios";

const api = "http://127.0.0.1:8000/api/slider-api"

function sliderUrl(storeId) {

    return `${api}/${storeId}`;
}

const getSlider = (storeId) =>{
    return axios.get(sliderUrl(storeId))
}

export {
    getSlider
};
