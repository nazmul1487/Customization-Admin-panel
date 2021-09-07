import React from "react";
import CallIcon from "@material-ui/icons/Call";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

const OurService = () =>{
    return (
        <>
            <div className="container py-md-3">
                <h3 className="heading mb-lg-5 mb-4">Why Salextra?</h3>
                <div className="row service-grids">
                    <div className="col-lg-5 row service-grid1 w3-agile-grid text-right">
                        <div className="col-sm-10 col-10 agile-info">
                            <h4 className="mb-3">Customer <span>Service</span></h4>
                            {/*<p className="mb-5">Morbi tempus rhoncus finibus. lorem init Pellentesque tempor, diam ut*/}
                            {/*    cursus in sollicitudin, urna imperdiet arcu, id. </p>*/}
                            <img style={{height:'150px',width:'350px'}} src={'media/customerService.gif'} />
                        </div>
                        {/*<div className="col-sm-2 col-2 ">*/}
                        {/*    <CallIcon style={{color:'deepskyblue', fontSize:35}} />*/}
                        {/*</div>*/}
                        <div className="col-sm-10 col-10 mt-4 agile-info">
                            <h4 className="mb-3">Fast Product <span>Delivery</span></h4>
                            {/*<p>Morbi tempus rhoncus finibus. lorem init Pellentesque tempor, diam ut cursus in*/}
                            {/*    sollicitudin, urna imperdiet arcu, id. </p>*/}
                            <img style={{height:'150px',width:'350px'}} src={'media/car.gif'} />
                        </div>
                        {/*<div className="col-sm-2 col-2 ">*/}
                        {/*    <LocalShippingIcon style={{color:"#EA582C", fontSize:35}}/>*/}
                        {/*</div>*/}
                    </div>

                    <div className="col-lg-2 my-lg-4">
                        <AssignmentTurnedInIcon style={{marginTop:'100px', fontSize:100, color:'#DC7633',}}/>
                    </div>

                    {/*<div className="col-lg-5 row service-grid1 w3-agile-grid">*/}
                    {/*    <div className="col-sm-2 col-2 icon4">*/}
                    {/*        <CardGiftcardIcon style={{color:'#C43A1D', fontSize:35}}/>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-sm-10 col-10 agile-info">*/}
                    {/*        <h4 className="mb-3">Extra <span>Offer</span></h4>*/}
                    {/*        <p className="mb-5">Morbi tempus rhoncus finibus. lorem init Pellentesque tempor, diam ut*/}
                    {/*            cursus in sollicitudin, urna imperdiet arcu, id. </p>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-sm-2 col-2 icon5">*/}
                    {/*        <CardGiftcardIcon style={{color:'#C43A1D', fontSize:35}}/>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-sm-10 col-10 agile-info">*/}
                    {/*        <h4 className="mb-3">Extra <span>Deal</span></h4>*/}
                    {/*        <p>Morbi tempus rhoncus finibus. lorem init Pellentesque tempor, diam ut cursus in*/}
                    {/*            sollicitudin, urna imperdiet arcu, id. </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className="col-lg-5 row service-grid1 w3-agile-grid text-right">
                        <div className="col-sm-10 col-10 agile-info">
                            <h4 className="mb-3">Customer <span>Service</span></h4>
                            {/*<p className="mb-5">Morbi tempus rhoncus finibus. lorem init Pellentesque tempor, diam ut*/}
                            {/*    cursus in sollicitudin, urna imperdiet arcu, id. </p>*/}
                            <img style={{height:'150px',width:'350px'}} src={'media/customerService.gif'} />
                        </div>
                        {/*<div className="col-sm-2 col-2 ">*/}
                        {/*    <CallIcon style={{color:'deepskyblue', fontSize:35}} />*/}
                        {/*</div>*/}
                        <div className="col-sm-10 col-10 mt-4 agile-info">
                            <h4 className="mb-3">Fast Product <span>Delivery</span></h4>
                            {/*<p>Morbi tempus rhoncus finibus. lorem init Pellentesque tempor, diam ut cursus in*/}
                            {/*    sollicitudin, urna imperdiet arcu, id. </p>*/}
                            <img style={{height:'150px',width:'350px'}} src={'media/car.gif'} />
                        </div>
                        {/*<div className="col-sm-2 col-2 ">*/}
                        {/*    <LocalShippingIcon style={{color:"#EA582C", fontSize:35}}/>*/}
                        {/*</div>*/}
                    </div>

                </div>

            </div>
        </>
    );
}

export default OurService;