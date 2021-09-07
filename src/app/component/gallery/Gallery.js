import React from "react";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import './galleryStyle.css'
const Gallery = () =>{
  return (
    <>
      <div className="container overflow-hidden">
        <div className="row mb-4">
          <div className="col-lg-12 w3-agile-grid">
            <div className="row mr-lg-0">
              <div className="col-lg-4 col-md-5 col-sm-4 mt-4">
                <img src={'media/logo/LENOVO.png'} className="img-fluid mt-1 galImg" alt="image" />
              </div>

              <div className="col-lg-4 col-md-5 col-sm-4 mt-4">
                <img src={'media/news/pickabooBangla.jpg'} className="img-fluid mt-1 galImg" alt="image"  />
              </div>

              <div className="col-lg-4 col-md-5 col-sm-4 mt-4">
                <img src={'media/news/pickabooBangla.jpg'} className="img-fluid mt-1 galImg" alt="image" />
              </div>

              <div className="col-lg-4 col-md-5 col-sm-4 mt-4">
                <img src={'media/news/pickabooBangla.jpg'} className="img-fluid mt-1 galImg" alt="image" />
              </div>

              <div className="col-lg-4 col-md-5 col-sm-4 mt-4">
                <img src={'media/news/pickabooBangla.jpg'} className="img-fluid mt-1 galImg" alt="image" />
              </div>

              <div className="col-lg-4 col-md-5 col-sm-4 mt-4">
                <img src={'media/news/pickabooBangla.jpg'} className="img-fluid mt-1 galImg" alt="image" />
              </div>

              <div className="col-lg-4 col-md-5 col-sm-4 mt-4 mb-4">
                <img src={'media/news/pickabooBangla.jpg'} className="img-fluid mt-1 galImg" alt="image" />
              </div>

              <div className="col-lg-4 col-md-5 col-sm-4 mt-4 mb-4">
                <img src={'media/news/pickabooBangla.jpg'} className="img-fluid mt-1 galImg" alt="image" />
              </div>

              <div className="col-lg-4 col-md-5 col-sm-4 mt-4 mb-4">
                <img src={'media/news/pickabooBangla.jpg'} className="img-fluid mt-1 galImg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Gallery;