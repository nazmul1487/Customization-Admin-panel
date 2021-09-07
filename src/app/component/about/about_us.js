import React from "react";
import './style.css'
import CallIcon from '@material-ui/icons/Call';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
const AboutUs = () =>{
    return (
        <>
            <div className="container py-md-3 agile-info">
                <h2 className="heading mb-md-5 mb-4">About Us</h2>
                <div className="row about-grids agile-info">
                    <div className="col-lg-6 w3-agile-grid mb-lg-0 mb-5">
                        <p>Salextra Limited is the National Distributor for Motorola Lifestyle products, Energizer Accessories, Amazfit,
                            HP Accessories in Bangladesh. We are in the process of bringing global top-quality electronics brands in Bangladesh Market.
                            Salextra Limited is also coming up with a niche new E-Commerce platform soon.</p>
                        <p className="mt-2 mb-3">Salextra Limited is the National Distributor for Motorola Lifestyle products, Energizer Accessories, Amazfit,
                            HP Accessories in Bangladesh. We are in the process of bringing global top-quality electronics brands in Bangladesh Market.
                            Salextra Limited is also coming up with a niche new E-Commerce platform soon.</p>
                        <p className="mt-2 mb-3">Salextra Limited is the National Distributor for Motorola Lifestyle products, Energizer Accessories, Amazfit,
                            HP Accessories in Bangladesh. We are in the process of bringing global top-quality electronics brands in Bangladesh Market.
                            Salextra Limited is also coming up with a niche new E-Commerce platform soon.</p>
                        <a className="about" href="/home">Read More </a>
                    </div>
                    <div className="col-lg-3 w3-agile-grid col-md-4 pr-md-0">
                        <h3 className="margin">1+ years experience</h3>
                        <h3 className="black">Valuable Services</h3>
                    </div>
                    <div className="col-lg-3 w3-agile-grid col-md-4 mt-md-0 mt-4">
                        <h3 className="margin green">Experienced Professionals</h3>
                        <h3 className="grey">Management Solutions</h3>
                    </div>
                </div>
            </div>
            <hr />

        </>

    )
}
export default AboutUs;