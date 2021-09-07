import React from "react";
import './contactStyle.css';
import MailIcon from '@material-ui/icons/Mail';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import WorkIcon from '@material-ui/icons/Work';
import ContactForm from "./ContactForm";

const ContactUs = () =>{
    return(
        <>
            <div className="container ">
                <h2 className="heading mb-lg-5 mb-4">Get In Touch</h2>
                <div className="row contact-grids w3-agile-grid">
                    <div className="row col-md-4 col-sm-6 contact-grid1 w3-agile-grid">
                        <div className="col-3 text-center">
                            <MailIcon  style={{ fontSize: 70, paddingBottom:5, marginLeft:-5,color:"#dc3545" }}/>
                        </div>
                        <div className="col-9 p-0">
                            <h4>Email</h4>
                            <p><a href="mailto:info@example.com">hello@salextrabd.com</a></p>
                        </div>
                    </div>
                    <div className="row col-md-4 col-sm-6 mt-sm-0 mt-4 contact-grid1 w3-agile-grid">
                        <div className="col-3 text-center">
                            <PhoneEnabledIcon style={{ fontSize: 70, paddingBottom:5, marginLeft:-5,color:"#dc3545" }} />
                        </div>
                        <div className="col-9 p-0">
                            <h4>Call Us</h4>
                            <p>+88 01810 008810</p>
                        </div>
                    </div>
                    <div className="row col-md-4 col-sm-6 mt-md-0 mt-4 contact-grid1 w3-agile-grid">
                        <div className="col-3 text-center">
                            <WorkIcon style={{ fontSize: 70, paddingBottom:5, marginLeft:-5,color:"#dc3545" }} />
                        </div>
                        <div className="col-9 p-0">
                            <h4>Career</h4>
                            <p><a href="mailto:example@career.com">hello@salextrabd.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="row contact_full mt-4">
                    <div className="col-md-12 col-sm-10 contact-us">
                        <ContactForm />

                    </div>
                    <div className="col-md-12 col-sm-10 map">
                        <iframe
                            src="https://maps.google.com/maps?q=SNOWDROPS%20Apartments%2078%20Rd%20No.%2011,%20Dhaka%201213&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                    </div>
                </div>


            </div>
        </>
    );
}
export default ContactUs;