import React, { useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";


export const Home = () => {
  const [handleDropdownMenu, setHandleDropdownMenu] = useState(false);

  const toggleSubMenu = () => {
    setHandleDropdownMenu(true);
    console.log(handleDropdownMenu);
  };

  const [disableState, setDisableState] = useState(true);

  const toggleSubMenu1 = () => {
    setDisableState(false);
    console.log(disableState);
  };

  return (
    <>
      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src="https://acharan.in/Admin_panel/public/image/news_image/1678975219.jpg"
            className="w-100 rounded"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img
                  src="https://acharan.in/Admin_panel/public/image/news_image/1678975219.jpg"
                  className="w-100 rounded"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img
                  src="https://acharan.in/Admin_panel/public/image/news_image/1678975219.jpg"
                  className="w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <div>
                <img
                  src="https://acharan.in/Admin_panel/public/image/news_image/1678975219.jpg"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img
                  src="https://acharan.in/Admin_panel/public/image/news_image/1678975219.jpg"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee className="marqText" speed={100}>
        <p>
          राहुल गांधी पर ठाकुर का तंज, सही मायने में ये दुर्भाग्य है कि वहां
          सांसद.
        </p>
        <br />
        <p>भारतीय टीम को पहले भी पांच बार दस विकेट से मिली थी करारी हार</p>
      </Marquee>
      <div className="row mt-3 mb-3">
        <div className="col-md-12">
          <div className="lifeAndScience">
            <button className="lifeAndScienceButton">लाइफ & साइंस</button>
            <button className="lifeAndScienceButton">साक्षात्कार</button>
            <button className="lifeAndScienceButton ps-4 pe-4">पर्यटन</button>
            <button className="lifeAndScienceButton ps-4 pe-4">आलेख</button>
            <button className="lifeAndScienceButton">राजस्थान</button>
            <button className="lifeAndScienceButton">उत्तरप्रदेश</button>
            <button className="lifeAndScienceButton">मध्य प्रदेश</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3">
          <div className="desh_div">
            <img src="https://acharan.in/img/myapp.jpg" alt="" />
          </div>
          <h2 className="text-center mt-2">देश</h2>

          <div className="row mt-4">
            <div className="col-sm-4">
              <img
                className="col_Img"
                src="https://acharan.in/Admin_panel/public/image/news_image/1679404578.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8 ">
              <p>देश: 150 देशों की खुशहाली सूची में भारत 136 वें नंबर पर</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-4">
              <img
                className="col_Img"
                src="https://acharan.in/Admin_panel/public/image/news_image/1679404578.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8 ">
              <p>देश: 150 देशों की खुशहाली सूची में भारत 136 वें नंबर पर</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-4">
              <img
                className="col_Img"
                src="https://acharan.in/Admin_panel/public/image/news_image/1679404578.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8 ">
              <p>देश: 150 देशों की खुशहाली सूची में भारत 136 वें नंबर पर</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-4">
              <img
                className="col_Img"
                src="https://acharan.in/Admin_panel/public/image/news_image/1679404578.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8 ">
              <p>देश: 150 देशों की खुशहाली सूची में भारत 136 वें नंबर पर</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-4">
              <img
                className="col_Img"
                src="https://acharan.in/Admin_panel/public/image/news_image/1679404578.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8 ">
              <p>देश: 150 देशों की खुशहाली सूची में भारत 136 वें नंबर पर</p>
            </div>
          </div>
          <div className="antarastriya mt-4 ">
            <div className="card_icon text-center">
              <i class="fa-solid fa-sort-down"></i>
            </div>
            <h3 className="text-center antarastriya_h3 ">अंतरराष्ट्रीय</h3>
            <div className="antarastriya_div">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679902674.jpg"
                alt=""
              />
              <span>
                वैज्ञानिकों को संकेत मिले हैं कि धरती का अंत कैसे होगा?
              </span>
            </div>
            <div className="antarastriya_div">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679902674.jpg"
                alt=""
              />
              <span>
                वैज्ञानिकों को संकेत मिले हैं कि धरती का अंत कैसे होगा?
              </span>
            </div>
            <div className="antarastriya_div">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679902674.jpg"
                alt=""
              />
              <span>
                वैज्ञानिकों को संकेत मिले हैं कि धरती का अंत कैसे होगा?
              </span>
            </div>
            <div className="antarastriya_div">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679902674.jpg"
                alt=""
              />
              <span>
                वैज्ञानिकों को संकेत मिले हैं कि धरती का अंत कैसे होगा?
              </span>
            </div>
            <div className="antarastriya_div">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679902674.jpg"
                alt=""
              />
              <span>
                वैज्ञानिकों को संकेत मिले हैं कि धरती का अंत कैसे होगा?
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card_div ">
            <div className="card_icon text-center">
              <i class="fa-solid fa-sort-down"></i>
            </div>
            <h5 className="rajniti_h5">राजनीति</h5>
            <p className="rajniti_text text-center">
              <span className="rajniti_spl">राजनीति -</span> ममता की नवीन पटनायक
              से मुलाकात, तीसरे मोर्चा को लेकर बनेगी बात
            </p>
            <center>
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679576169.jpg"
                alt=""
                className="w-100"
              />
            </center>
            <div className="rajniti_below_flex mt-3 fs-5">
              <span className="fw-bold">राजनीति</span>
              <div className="d-flex gap-18px">
                <i className="fa-brands fa-facebook text-secondary"></i>
                <i className="fa-brands fa-instagram text-secondary"></i>
                <i className="fa-brands fa-twitter text-secondary"></i>
              </div>
            </div>
          </div>
          <div className="row rajniti_below_div mt-4 mb-2">
            <div className="col-sm-4">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679749886.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8">
              <span>वायनाड : अब सबकी नजरें चुनाव आयोग पर</span>
            </div>
          </div>
          <div className="row rajniti_below_div mt-4 mb-2">
            <div className="col-sm-4">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679749886.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8">
              <span>वायनाड : अब सबकी नजरें चुनाव आयोग पर</span>
            </div>
          </div>
          <div className="row rajniti_below_div mt-4 mb-2">
            <div className="col-sm-4">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679749886.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8">
              <span>वायनाड : अब सबकी नजरें चुनाव आयोग पर</span>
            </div>
          </div>
          <div className="row rajniti_below_div mt-4 mb-2">
            <div className="col-sm-4">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679749886.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8">
              <span>वायनाड : अब सबकी नजरें चुनाव आयोग पर</span>
            </div>
          </div>
          <div className="row rajniti_below_div mt-4 mb-2">
            <div className="col-sm-4">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679749886.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8">
              <span>वायनाड : अब सबकी नजरें चुनाव आयोग पर</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex flex-nowrap justify-content-around h-50px border-bottom-5px-red">
                <span className="text-danger fw-bold p-2">health</span>
                <span className="text-danger fw-bold p-2">health</span>
                <span className="text-danger fw-bold p-2">health</span>
              </div>
              <div className="homePageScrollDiv">
                <div className="row mb-2">
                  <div className="col-md-4">
                  <img
                    src="https://acharan.in/Admin_panel/public/image/news_image/1679749886.jpg"
                    className="w-100"
                    alt=""
                  />
                  </div>
                  <div className="col-md-8">
                    <span>हद से ज्यादा जिम आपकी जान को खतरे में डाल सकता हैं : कार्डियोलॉजिस्ट</span><br />
                    <small>2023-03-29 11:54:21</small>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4">
                  <img
                    src="https://acharan.in/Admin_panel/public/image/news_image/1679749886.jpg"
                    className="w-100"
                    alt=""
                  />
                  </div>
                  <div className="col-md-8">
                    <span>हद से ज्यादा जिम आपकी जान को खतरे में डाल सकता हैं : कार्डियोलॉजिस्ट</span><br />
                    <small>2023-03-29 11:54:21</small>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4">
                  <img
                    src="https://acharan.in/Admin_panel/public/image/news_image/1679749886.jpg"
                    className="w-100"
                    alt=""
                  />
                  </div>
                  <div className="col-md-8">
                    <span>हद से ज्यादा जिम आपकी जान को खतरे में डाल सकता हैं : कार्डियोलॉजिस्ट</span><br />
                    <small>2023-03-29 11:54:21</small>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4">
                  <img
                    src="https://acharan.in/Admin_panel/public/image/news_image/1679749886.jpg"
                    className="w-100"
                    alt=""
                  />
                  </div>
                  <div className="col-md-8">
                    <span>हद से ज्यादा जिम आपकी जान को खतरे में डाल सकता हैं : कार्डियोलॉजिस्ट</span><br />
                    <small>2023-03-29 11:54:21</small>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4">
                  <img
                    src="https://acharan.in/Admin_panel/public/image/news_image/1679749886.jpg"
                    className="w-100"
                    alt=""
                  />
                  </div>
                  <div className="col-md-8">
                    <span>हद से ज्यादा जिम आपकी जान को खतरे में डाल सकता हैं : कार्डियोलॉजिस्ट</span><br />
                    <small>2023-03-29 11:54:21</small>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-4">
                  <img
                    src="https://acharan.in/Admin_panel/public/image/news_image/1679749886.jpg"
                    className="w-100"
                    alt=""
                  />
                  </div>
                  <div className="col-md-8">
                    <span>हद से ज्यादा जिम आपकी जान को खतरे में डाल सकता हैं : कार्डियोलॉजिस्ट</span><br />
                    <small>2023-03-29 11:54:21</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="desh_div">
            <img src="https://acharan.in/img/myapp.jpg" alt="" />
          </div>
          <h2 className="text-center mt-2">देश</h2>
          <div className="row mt-4">
            <div className="col-sm-4 col_Img">
              <img
                className="col_Img"
                src="https://acharan.in/Admin_panel/public/image/news_image/1679404578.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8 ">
              <p>देश: 150 देशों की खुशहाली सूची में भारत 136 वें नंबर पर</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-4 col_Img">
              <img
                className="col_Img"
                src="https://acharan.in/Admin_panel/public/image/news_image/1679404578.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8 ">
              <p>देश: 150 देशों की खुशहाली सूची में भारत 136 वें नंबर पर</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-4 col_Img">
              <img
                className="col_Img"
                src="https://acharan.in/Admin_panel/public/image/news_image/1679404578.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8 ">
              <p>देश: 150 देशों की खुशहाली सूची में भारत 136 वें नंबर पर</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-4 col_Img">
              <img
                className="col_Img"
                src="https://acharan.in/Admin_panel/public/image/news_image/1679404578.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8 ">
              <p>देश: 150 देशों की खुशहाली सूची में भारत 136 वें नंबर पर</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-4">
              <img
                className="col_Img"
                src="https://acharan.in/Admin_panel/public/image/news_image/1679404578.jpg"
                alt=""
              />
            </div>
            <div className="col-sm-8 ">
              <p>देश: 150 देशों की खुशहाली सूची में भारत 136 वें नंबर पर</p>
            </div>
          </div>
          <div className="antarastriya mt-4 ">
            <div className="card_icon text-center">
              <i class="fa-solid fa-sort-down"></i>
            </div>
            <h3 className="text-center antarastriya_h3">क्रिकेट अपडेट</h3>
            <div className="antarastriya_div">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679902674.jpg"
                alt=""
              />
              <span>
                वैज्ञानिकों को संकेत मिले हैं कि धरती का अंत कैसे होगा?
              </span>
            </div>
            <div className="antarastriya_div">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679902674.jpg"
                alt=""
              />
              <span>
                वैज्ञानिकों को संकेत मिले हैं कि धरती का अंत कैसे होगा?
              </span>
            </div>
            <div className="antarastriya_div">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679902674.jpg"
                alt=""
              />
              <span>
                वैज्ञानिकों को संकेत मिले हैं कि धरती का अंत कैसे होगा?
              </span>
            </div>
            <div className="antarastriya_div">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679902674.jpg"
                alt=""
              />
              <span>
                वैज्ञानिकों को संकेत मिले हैं कि धरती का अंत कैसे होगा?
              </span>
            </div>
            <div className="antarastriya_div">
              <img
                src="https://acharan.in/Admin_panel/public/image/news_image/1679902674.jpg"
                alt=""
              />
              <span>
                वैज्ञानिकों को संकेत मिले हैं कि धरती का अंत कैसे होगा?
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
