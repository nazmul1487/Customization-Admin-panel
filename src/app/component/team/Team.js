import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './teamStyle.css';
import {Link} from "react-router-dom";
const Team = () =>{
    return(
        <>
            <div className="container py-md-3 " >
                <h3 className="heading mb-lg-5 mb-4">Salextra Team</h3>
                <div className="row team-grids">
                        <div className="col-md-6 col-sm-6 mb-md-0 mb-4 team-grid w3-agile-grid">
                        <div className="team-members">
                            <div className="team-avatar">
                                <img src={'media/Team/shakib.jpg'} className="img-fluid" alt="image" />
                            </div>
                            <div className="team-desc agile-info">
                                <h4>Shakib Arafat Rony</h4>
                                <span>Founder & Managing Director</span>
                                <br />
                                <a href="#"> <FacebookIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                                <a href="#"> <InstagramIcon style={{fontSize:40,marginRight:5, color:'#E1306C'}} /></a>
                                <a href="#"> <LinkedInIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-6 mb-md-0 mb-4 team-grid w3-agile-grid">
                        <div className="team-members">
                            <div className="team-avatar">
                                <img src={'media/Team/fahriyar.jpg'} className="img-fluid" alt="image" />
                            </div>
                            <div className="team-desc agile-info">
                                <h4>Chowdhury Fahriyar</h4>
                                <span>Co-Founder</span>
                                <br />
                                <a href="#"> <FacebookIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                                <a href="#"> <InstagramIcon style={{fontSize:40,marginRight:5, color:'#E1306C'}} /></a>
                                <a href="#"> <LinkedInIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container py-md-3">
                {/*<h3 className="heading mb-lg-5 mb-4">Salextra Team</h3>*/}
                <div className="row team-grids">
                    {/*<div className="col-md-3 col-sm-6 mb-md-0 mb-4 team-grid w3-agile-grid">*/}
                    {/*    <div className="team-members">*/}
                    {/*        <div className="team-avatar">*/}
                    {/*            <img src={'media/Team/shakib.jpg'} className="img-fluid" alt="image" />*/}
                    {/*        </div>*/}
                    {/*        <div className="team-desc agile-info">*/}
                    {/*            <h4>Shakib Arafat Rony</h4>*/}
                    {/*            <span>Founder & Managing Director</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className="col-md-3 col-sm-6 mb-sm-0 mb-4 team-grid w3-agile-grid">*/}
                    {/*    <div className="team-members">*/}
                    {/*        <div className="team-avatar">*/}
                    {/*            <img src={'media/Team/fahriyar.jpg'} className="img-fluid" alt="image" />*/}
                    {/*        </div>*/}
                    {/*        <div className="team-desc agile-info">*/}
                    {/*            <h4>Chowdhury Fahriyar</h4>*/}
                    {/*            <span>Co-Founder</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="col-md-3 col-sm-6 mb-sm-0 mb-4 mt-4 team-grid w3-agile-grid">
                        <div className="team-members">
                            <div className="team-avatar">
                                <img src={'media/Team/subasis.jpg'} className="img-fluid" alt="image" />
                            </div>
                            <div className="team-desc agile-info">
                                <h4>Shubhasish Roy</h4>
                                <span>Manager</span>
                                <br />
                                <a href="#"> <FacebookIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                                <a href="#"> <InstagramIcon style={{fontSize:40,marginRight:5, color:'#E1306C'}} /></a>
                                <a href="#"> <LinkedInIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-sm-0 mb-4 mt-4 team-grid w3-agile-grid">
                        <div className="team-members">
                            <div className="team-avatar">
                                <img src={'media/Team/nazmul.png'} className="img-fluid" alt="image" />
                            </div>
                            <div className="team-desc agile-info">
                                <h4>Admin</h4>
                                <span>Admin</span>
                                <br />
                                <a href="#"> <FacebookIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                                <a href="#"> <InstagramIcon style={{fontSize:40,marginRight:5, color:'#E1306C'}} /></a>
                                <a href="#"> <LinkedInIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-sm-0 mb-4 mt-4 team-grid w3-agile-grid">
                        <div className="team-members">
                            <div className="team-avatar">
                                <img src={'media/Team/baishak.jpg'} className="img-fluid" alt="image" />
                            </div>
                            <div className="team-desc agile-info">
                                <h4>QA </h4>
                                <span>Baishakh Islam</span>
                                <br />
                                <a href="#"> <FacebookIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                                <a href="#"> <InstagramIcon style={{fontSize:40,marginRight:5, color:'#E1306C'}} /></a>
                                <a href="#"> <LinkedInIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-sm-0 mb-4 mt-4 team-grid w3-agile-grid">
                        <div className="team-members">
                            <div className="team-avatar">
                                <img src={'media/Team/nazmul.png'} className="img-fluid" alt="image" />
                            </div>
                            <div className="team-desc agile-info">
                                <h4>Nazmul Hassan</h4>
                                <span>Web Application Developer</span>
                                <br />
                                <a href="https://www.facebook.com/profile.php?id=100004393025438"> <FacebookIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                                <a href="https://www.facebook.com/profile.php?id=100004393025438"> <InstagramIcon style={{fontSize:40,marginRight:5, color:'#E1306C'}} /></a>
                                <a href="https://www.linkedin.com/in/md-nazmul-hassan-56350219b/"> <LinkedInIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-sm-0 mb-4 mt-4 team-grid w3-agile-grid">
                        <div className="team-members">
                            <div className="team-avatar">
                                <img src={'media/Team/palash.jpg'} className="img-fluid" alt="image" />
                            </div>
                            <div className="team-desc agile-info">
                                <h4>Khairul Bashar Palash</h4>
                                <span>Designer</span>
                                <br />
                                <a href="#"> <FacebookIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                                <a href="#"> <InstagramIcon style={{fontSize:40,marginRight:5, color:'#E1306C'}} /></a>
                                <a href="#"> <LinkedInIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-sm-0 mb-4 mt-4 team-grid w3-agile-grid">
                        <div className="team-members">
                            <div className="team-avatar">
                                <img src={'media/Team/suvo.jpg'} className="img-fluid" alt="image" />
                            </div>
                            <div className="team-desc agile-info">
                                <h4>Mostafijur Rahman Shuvo</h4>
                                <span>Key Account</span>
                                <br />
                                <a href="#"> <FacebookIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                                <a href="#"> <InstagramIcon style={{fontSize:40,marginRight:5, color:'#E1306C'}} /></a>
                                <a href="#"> <LinkedInIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-sm-0 mb-4 mt-4 team-grid w3-agile-grid">
                        <div className="team-members">
                            <div className="team-avatar">
                                <img src={'media/Team/masuk.jpg'} className="img-fluid" alt="image" />
                            </div>
                            <div className="team-desc agile-info">
                               <h4>Masuk</h4>
                                <span>Key Account</span>
                                <br />
                                <a href="#"> <FacebookIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                                <a href="#"> <InstagramIcon style={{fontSize:40,marginRight:5, color:'#E1306C'}} /></a>
                                <a href="#"> <LinkedInIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-sm-0 mb-4 mt-4 team-grid w3-agile-grid">
                        <div className="team-members">
                            <div className="team-avatar">
                                <img src={'media/Team/sifat.jpg'} className="img-fluid" alt="image" />
                            </div>
                            <div className="team-desc agile-info">
                               <h4>Sifat</h4>
                                <span>Key Account</span>
                                <br />
                                <a href="#"> <FacebookIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                                <a href="#"> <InstagramIcon style={{fontSize:40,marginRight:5, color:'#E1306C'}} /></a>
                                <a href="#"> <LinkedInIcon style={{fontSize:40, marginRight:5, color:'#2457CA'}} /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Team;