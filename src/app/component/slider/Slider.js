import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
const SliderBoot = (props) => {
    const url="http://127.0.0.1:8000"
    // const {data} =props
    // console.log(data)
    return (

        <div className="container-fluid w-75" >
            <h1>{props.name}</h1>
            {/*<img src={`${url}${props.image}`} alt="hello"/>*/}


            {/*{props.map((data) => (*/}
            {/*    <Carousel className="slider-style " >*/}
            {/*        <Carousel.Item interval={5000} >*/}
            {/*            key = {data.id}*/}
            {/*            <img className="d-block w-100" src={`${url}${data.image}`} alt="hello"/>*/}
            {/*            <Carousel.Caption>*/}
            {/*                <h2> {data.name}</h2>*/}
            {/*            </Carousel.Caption>*/}
            {/*        </Carousel.Item>*/}
            {/*    </Carousel>*/}
            {/*))}*/}

            {/*<Carousel className="slider-style " >*/}
            {/*    <Carousel.Item interval={5000} >*/}
            {/*        <img className="d-block w-100" src={`${url}${props.image}`} alt="hello"/>*/}
            {/*        <Carousel.Caption>*/}
            {/*            <h2 > {props.name}</h2>*/}
            {/*        </Carousel.Caption>*/}
            {/*    </Carousel.Item>*/}
            {/*</Carousel>*/}
        </div>
    );
}
export default SliderBoot;

// <Carousel className="slider-style " >
//     <Carousel.Item interval={5000} >
//         <img className="d-block w-100" src={`${url}${props.image}`} alt="hello"/>
//         <Carousel.Caption>
//             <h2 > {props.name}</h2>
//         </Carousel.Caption>
//     </Carousel.Item>
// </Carousel>
