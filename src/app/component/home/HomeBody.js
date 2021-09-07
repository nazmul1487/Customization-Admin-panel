import React from 'react';
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import DemoSlider from "../slider/DemoSlider";

const HomeBody= () =>{
  return (
      <>
            <div className="container py-md-3">
                <div className="col-lg-12 w3-agile-grid">
                          <div className="row blog-grid1 mr-lg-1">
                              <div className="col-lg-6 col-md-5 col-sm-4">
                                  <img src={'media/news/pickabooBangla.jpg'} className="img-fluid mt-1" alt="image"  style={{height:'auto', width:'100%'}}/>
                              </div>
                              <div className="col-lg-6 col-md-5 agile-info col-sm-4 blog-text">
                                  <p className="mt-2">১৯ ফেব্রুয়ারি ২০২১</p>
                                  <h4>পিকাবুতে মটোরোলার স্মার্টফোন ও একসেসরিজ</h4>
                                  <p style={{color:"black"}}>
                                    সম্প্রতি পিকাবুর সঙ্গে এই সম্পর্কিত একটি চুক্তি স্বাক্ষর করেছে বাংলাদেশে মটোরোলার ন্যাশনাল পার্টনার সেলেক্সট্রা লিমিটেড। সেলেক্সট্রা লিমিটেডের ব্যবস্থাপনা পরিচালক সাকিব আরাফাত ও
                                    পিকাবু ডট কম-এর প্রধান নির্বাহী মরিন হোসেন তালুকদার নিজ নিজ প্রতিষ্ঠানের পক্ষে চুক্তিতে স্বাক্ষর করেন। এই সময় আরও উপস্থিত ছিলেন, সেলেক্সট্রা লিমিটেডের চিফ অপারেটিং অফিসার চৌধুরী ফাহরিয়ার,
                                    হেড অব সেলস জাকিরুল ইসলাম প্রমুখ।
                                  </p>
                                  <a href="https://www.banglatribune.com/667757/%E0%A6%AA%E0%A6%BF%E0%A6%95%E0%A6%BE%E0%A6%AC%E0%A7%81%E0%A6%A4%E0%A7%87-%E0%A6%AE%E0%A6%9F%E0%A7%8B%E0%A6%B0%E0%A7%8B%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%B8%E0%A7%8D%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%9F%E0%A6%AB%E0%A7%8B%E0%A6%A8-%E0%A6%93-%E0%A6%8F%E0%A6%95%E0%A6%B8%E0%A7%87%E0%A6%B8%E0%A6%B0%E0%A6%BF%E0%A6%9C" className="blog">Read More < DoubleArrowIcon /> </a>
                              </div>
                          </div>
                        </div>

                        <div className="col-lg-12 w3-agile-grid mt-3">
                            <div className="row blog-grid1 mr-lg-1">
                                <div className="col-lg-6 col-md-5 agile-info col-sm-4 blog-text">
                                    <p className="mt-2">27 April, 2021</p>
                                    <h4>E-commerce platform Salextra launched in Bangladesh</h4>
                                    <p style={{color:"black"}}>
                                      Salextra, an online shopping platform for mobile and consumer electronics in Bangladesh, started its operations on 5 January, 2021.
                                      Salextra's Co-Founder and CEO Chowdhury Fahriyar, Senior Manager Shubhasish Roy, plus Head of Products and Services Saiful Islam were present at its launch ceremony,
                                       read a press release issued on Tuesday.
                                    </p>
                                    <a href="https://www.tbsnews.net/companies/e-commerce-platform-salextra-launched-bangladesh-182722" className="blog">Read More < DoubleArrowIcon /> </a>
                                </div>
                                <div className="col-lg-6 col-md-5 col-sm-4">
                                    <img src={'media/news/grandopening.jpg'} className="img-fluid mt-1" alt="image"  style={{height:'auto', width:'100%'}}/>
                                </div>
                            </div>
                        </div>
            </div>
      </>
  );
}
export default HomeBody;
