import React from "react";
import './forumStyle.css';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const Forum = () => {
    return (
        <>
            <div className="workd w3-agile py-3">
                <div className="container py-md-3">
                    <h2 className="heading mb-lg-5 mb-4">Salextra news</h2>
                    <div className="row blog-grids">
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
                                  {/*<p className="mt-2" style={{textAlign:"end"}}><b>Date: </b> 15 june 2018</p>*/}
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

                        <div className="col-lg-12 w3-agile-grid mt-3">
                          <div className="row blog-grid1 mr-lg-1">
                              <div className="col-lg-6 col-md-5 col-sm-4">
                                  <img src={'media/news/pickabooBangla.jpg'} className="img-fluid mt-1" alt="image"  style={{height:'auto', width:'100%'}}/>
                              </div>
                              <div className="col-lg-6 col-md-5 agile-info col-sm-4 blog-text">
                                  <p className="mt-2">21st February, 2021</p>
                                  <h4>Salextra brings Motorola on Pickaboo</h4>
                                  <p style={{color:'black'}}>
                                    Salextra Limited, national partner of Motorola brand, has signed up an agreement with Pickaboo.com recently regarding the partnership.  Salextra Managing Director Shakib Arafat and Pickaboo chief executive Morin Talukder signed the agreement.
                                  </p>
                                  {/*<p className="mt-2" style={{textAlign:"end"}}><b>Date: </b> 15 june 2018</p>*/}
                                  <a href="https://www.daily-sun.com/post/537208/Salextra-brings-Motorola-on-Pickaboo" className="blog">Read More < DoubleArrowIcon /> </a>
                              </div>
                          </div>
                        </div>

                        <div className="col-lg-12 w3-agile-grid mt-3">
                            <div className="row blog-grid1 mr-lg-1">
                                <div className="col-lg-6 col-md-5 agile-info col-sm-4 blog-text">
                                    <p className="mt-2"> ২৭ এপ্রিল ২০২১</p>
                                    <h4>মটোরোলার যত লাইফস্টাইল পণ্য</h4>
                                    <p style={{color:"black"}}>
                                      বিশ্বখ্যাত প্রযুক্তি ব্র্যান্ড মটোরোলা দেশে স্মার্টফোনের পাশাপাশি অন্যান্য স্মার্ট প্রযুক্তিপণ্যও নিয়ে আসছে। এরমধ্যে অন্যতম হলো লাইফ স্টাইল পণ্য। হেডফোন, ব্লুটুথ হেডফোন, ব্লুটুথ স্পিকার, ইয়ার ভার্ভবাডস, পোর্টেবল স্পিকারসহ বিভিন্ন ধরনের গ্যাজেট দেশের বাজারে অবমুক্ত করেছে বাংলাদেশে মটোরোলার ন্যাশনাল পার্টনার সেলেক্সট্রা লিমিটেড।
                                    </p>
                                    <a href="https://www.banglatribune.com/673537/%E0%A6%AE%E0%A6%9F%E0%A7%8B%E0%A6%B0%E0%A7%8B%E0%A6%B2%E0%A6%BE%E0%A6%B0-%E0%A6%AF%E0%A6%A4-%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%AB%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%87%E0%A6%B2-%E0%A6%AA%E0%A6%A3%E0%A7%8D%E0%A6%AF" className="blog">Read More < DoubleArrowIcon /> </a>
                                </div>
                                <div className="col-lg-6 col-md-5 col-sm-4">
                                    <img src={'media/news/motorolaponno.jpg'} className="img-fluid mt-1" alt="image"  style={{height:'auto', width:'100%'}}/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 w3-agile-grid mt-3">
                          <div className="row blog-grid1 mr-lg-1">
                              <div className="col-lg-6 col-md-5 col-sm-4">
                                  <img src={'media/news/salextra_1.png'} className="img-fluid mt-1" alt="image"  style={{height:'auto', width:'100%'}}/>
                              </div>
                              <div className="col-lg-6 col-md-5 agile-info col-sm-4 blog-text">
                                  <p className="mt-2"> 15 January, 2021</p>
                                  <h4>Salexta launches new e-commerce site for gadgets</h4>
                                  <p style={{color:'black'}}>
                                    Salextra Shop has recently launched a new e-commerce site for customers looking to purchase consumer electronics, smartphones & feature phones, gadgets to IoT Devices, household smart solutions etc. of multiple brands.
                                  </p>
                                  {/*<p className="mt-2" style={{textAlign:"end"}}><b>Date: </b> 15 june 2018</p>*/}
                                  <a href="https://www.thedailystar.net/toggle/news/salextra-launches-new-e-commerce-site-gadgets-2028389" className="blog">Read More < DoubleArrowIcon /> </a>
                              </div>
                          </div>
                        </div>

                        <div className="col-lg-12 w3-agile-grid mt-3">
                            <div className="row blog-grid1 mr-lg-1">
                                <div className="col-lg-6 col-md-5 agile-info col-sm-4 blog-text">
                                    <p className="mt-2">০৫ জানুয়ারি ২০২১</p>
                                    <h4>‘এক্সট্রা’ দেবে অনলাইন শপিং প্ল্যাটফর্ম সেলেক্সট্রা</h4>
                                    <p style={{color:"black"}}>
                                      দেশে নতুন অনলাইন শপিং প্ল্যাটফর্ম ‘সেলেক্সট্রা শপ’ (https://www.salextra.com.bd/)যাত্রা শুরু করলো।  অন্যান্য ই-কমার্স প্ল্যাটফর্ম থেকে সেলেক্সট্রা তার গ্রাহকদের এক্সট্রা দেওয়ার মানসিকতা নিয়ে তাদের ভবিষ্যতের কার্যক্রম পরিচালনা করতে চায়।  মঙ্গলবার (৫ জানুয়ারি) প্রতিষ্ঠানটির কার্যালয়ে বিশেষ আয়োজনের মাধ্যমে নতুন এ অনলাইন শপিং প্ল্যাটফর্মের উদ্বোধন করা হয়।  উদ্বোধনী অনুষ্ঠানটি সেলেক্সট্রা শপের ফেসবুক পেজে সরাসরি সম্প্রচার করা হয়।
                                    </p>
                                    <a href="https://www.banglatribune.com/660759/%E2%80%98%E0%A6%8F%E0%A6%95%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A6%BE%E2%80%99-%E0%A6%A6%E0%A7%87%E0%A6%AC%E0%A7%87-%E0%A6%85%E0%A6%A8%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%A8-%E0%A6%B6%E0%A6%AA%E0%A6%BF%E0%A6%82-%E0%A6%AA%E0%A7%8D%E0%A6%B2%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%E0%A6%AB%E0%A6%B0%E0%A7%8D%E0%A6%AE" className="blog">Read More < DoubleArrowIcon /> </a>
                                </div>
                                <div className="col-lg-6 col-md-5 col-sm-4">
                                    <img src={'media/news/grandopening.jpg'} className="img-fluid mt-1" alt="image"  style={{height:'auto', width:'100%'}}/>
                                </div>
                            </div>
                        </div>

                        {/*<div className="col-lg-6 w3-agile-grid mt-5">*/}
                        {/*    <div className="row blog-grid1 mr-lg-1">*/}
                        {/*        <div className="col-lg-5 col-md-4 col-sm-5 pl-0">*/}
                        {/*            <img src={'media/Team/nazmul.png'} className="img-fluid" alt="image" />*/}
                        {/*        </div>*/}
                        {/*        <div className="col-lg-7 col-md-8 col-sm-7 agile-info blog-text">*/}
                        {/*            <p className="mt-2">june 15 2018</p>*/}
                        {/*            <h4>Capital Management</h4>*/}
                        {/*            <p>Cras blandit nibh ut pretium amet in elementum. Duis bibendum convallis nun ca*/}
                        {/*                dictum. Quisquen ac ipsum</p>*/}
                        {/*            <a href="#" className="blog">Read More < DoubleArrowIcon /> </a>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-6 w3-agile-grid mt-5">*/}
                        {/*    <div className="row blog-grid2 ml-lg-1">*/}
                        {/*        <div className="col-lg-5 col-md-4 col-sm-5 pl-0">*/}
                        {/*            <img src={'media/Team/nazmul.png'} className="img-fluid" alt="image" />*/}
                        {/*        </div>*/}
                        {/*        <div className="col-lg-7 col-md-8 col-sm-7 agile-info blog-text">*/}
                        {/*            <p className="mt-2">june 15 2018</p>*/}
                        {/*            <h4>Creative Solutions</h4>*/}
                        {/*            <p>Cras blandit nibh ut pretium amet in elementum. Duis bibendum convallis nun ca*/}
                        {/*                dictum. Quisquen ac ipsum</p>*/}
                        {/*            <a href="#" className="blog">Read More < DoubleArrowIcon /> </a>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Forum;