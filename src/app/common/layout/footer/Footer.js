import React from "react";
import TwitterIcon  from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import RoomIcon from '@material-ui/icons/Room';
import ScheduleIcon from '@material-ui/icons/Schedule';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import './FooterStyle.css'
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <footer className="py-3 bg-dark ">
      {/*<div className="row">*/}
        <div className="container-fluid text-white text-center" style={{display:"flex"}} >
          <div className="row col-lg-12" style={{display:"flex", }}>
              <div className="col-lg-4 col-sm-6">
                  <h4 className="text-capitalize mt-4" style={{color:'#EA582C'}}>Connect With Us</h4>
                  <br />
                  {/*<p> <TwitterIcon style={{marginLeft:0, marginRight:5, color:'#1DA1F2'}}/> Twitter</p>*/}
                  <p> <InstagramIcon style={{fontSize:30, marginLeft:0, marginRight:5, color:'#E1306C'}}/> Instagram</p>
                  <p> <LinkedInIcon style={{fontSize:30, marginLeft:-15, marginRight:5, color:'#2457CA'}} /> LinkedIn</p>
                  {/*<p> <YouTubeIcon style={{marginLeft:0, marginRight:5, color:'#FF0000'}}/> Youtube</p>*/}
                  <p> <FacebookIcon style={{fontSize:30, marginLeft:-13, marginRight:5, color:'#4867AA'}}/> Facebook</p>

              </div>
              <div className="col-lg-4 col-sm-6">
                  <h4 className="text-capitalize mt-4" style={{color:'#EA582C'}}>Head Quarters</h4>
                  <br />
                      <p><RoomIcon style={{marginRight:5, color:'#C71521'}}/> SNOWDROPS Apartment Flat No: D-4 Level: 4th Floor Plot: 78/M Road: 11 Banani, Dhaka-1213</p>
                      <p><ScheduleIcon style={{marginRight:5, color:'red'}}/> Time: 10:00 to 19:00pm</p>
                      <p><CallIcon style={{marginRight:5, color:'deepskyblue'}}/> +8801810008810</p>
                      <p><MailIcon style={{marginRight:5, color:'#DC143C'}}/> hello@salextrabd.com</p>

              </div>
            <div  className="col-lg-4 col-sm-6 ">
              <h4 className="text-capitalize mt-4" style={{color:'#EA582C'}}>Visit to <a className="link" href="https://salextra.com.bd/"> salextra shop</a></h4>
              <br />
              <p><a className="link" href="/home"> Home</a> </p>
              <p><a className="link" href="/about"> About</a> </p>
              <p><a className="link" href="/contact"> Contact</a> </p>
              <p><a className="link" href="#"> Terms of Use</a> </p>

            </div>

          </div >
        </div>
      {/*</div>*/}
      <p className="text-right text-white mr-5" style={{fontSize: 20}}>
          Copyright &copy; Salexta Limited 2021
      </p>
    </footer>
  );
};

export default Footer;
