import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "@material-ui/core/Button";

const ServicePage = () =>{
  return (
    <>
       <div className="container ">
           <h1 style={{textAlign:'center', margin:'10px'}}> We have .... service</h1>
           <p style={{textAlign:'center', margin:'20px'}}> Discribe our service</p>
         </div>
         <hr />
       <div className="row container py-md-3 " >
            <div className="col-md-4 col-sm-6 mb-sm-0 mb-4 mt-4 team-grid w3-agile-grid">
              <div className="team-members">
                <div className="team-avatar">
                  <img src={'media/logo/motorola.png'} className="img-fluid" alt="image" />
                </div>
                <div className="team-desc agile-info">
                  <h4>Motorola</h4>
                  <br />
                  <Button href="/motorola" style={{background:'black'}}> View Site </Button>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-sm-0 mb-4 mt-4 team-grid w3-agile-grid">
              <div className="team-members">
                <div className="team-avatar">
                  <img src={'media/logo/oppo.png'} className="img-fluid" alt="image" />
                </div>
                <div className="team-desc agile-info">
                  <h4>OPPO</h4>
                  <br />
                  <Button href="/oppo" style={{background:'black'}}> View Site </Button>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-sm-0 mb-4 mt-4 team-grid w3-agile-grid">
              <div className="team-members">
                <div className="team-avatar">
                  <img src={'media/logo/tecno.png'} className="img-fluid" alt="image" />
                </div>
                <div className="team-desc agile-info">
                  <h4>Tecno</h4>
                  <br />
                  <Button style={{background:'black'}}> View Site </Button>
                </div>
              </div>
            </div>


       </div>
    </>
  )
}
export default ServicePage;