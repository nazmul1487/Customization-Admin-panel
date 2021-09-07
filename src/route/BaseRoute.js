import React, { Fragment } from "react";
import {Route, Redirect, Switch,BrowserRouter } from "react-router-dom";
import Navbar from "../app/common/layout/navbar/Navbar";
import HomePage from "../app/component/home/HomePage";
import Footer from "../app/common/layout/footer/Footer";
import AboutUs from "../app/component/about/about_us";
import Forum from "../app/component/forum/Forum";
import Team from "../app/component/team/Team";
import ContactUs from "../app/component/contactUs/ContactUs";
import NotFound from "../app/common/errors/NotFound";
import Motorola from "../app/common/layout/navbar/service/Motorola";
import Oppo from "../app/common/layout/navbar/service/Oppo";
import Tecno from "../app/common/layout/navbar/service/Tecno";
import Lenevo from "../app/common/layout/navbar/service/Lenevo";
import ServicePage from "../app/common/layout/navbar/service/ServicePage";
import Oraimo from "../app/common/layout/navbar/service/Oraimo";
import TeamDemo from "../app/component/team/TeamDemo";
import Gallery from "../app/component/gallery/Gallery";
import GalleryDemo from "../app/component/gallery/GalleryDemo";

const BaseRoute = () => {
  return (
    <>
          <main className="container-fluid overflow-hidden">
            <Navbar />
              <BrowserRouter>
                  <Switch>
                    {/*<Route exact path="/" component={HomePage}/>*/}

                    <Route path="/about" exact component={AboutUs}/>
                    {/*<Route path="/team-demo" exact component={TeamDemo}/>*/}
                    <Route path="/forum" exact component={Forum}/>
                    <Route path="/team"  exact component={TeamDemo}/>
                    <Route path="/contact" exact component={ContactUs}/>
                    <Route path="/home" exact component={HomePage}/>
                    <Route path="/service" exact component={ServicePage}/>
                    <Route path="/gallery" exact component={GalleryDemo}/>
                    <Route path="/not-found" exact component={NotFound}/>
                    <Route path="/motorola" exact component={Motorola}/>
                    <Route path="/oppo" exact component={Oppo}/>
                    <Route path="/tecno" exact component={Tecno}/>
                    <Route path="/lenevo" exact component={Lenevo}/>
                    <Route path="/oraimo" exact component={Oraimo}/>
                    <Redirect from="/" exact to="/home" />
                    <Redirect to="/not-found" />
                 </Switch>
              </BrowserRouter>
          </main>
      <Footer />
    </>
  );
};

export default BaseRoute;
