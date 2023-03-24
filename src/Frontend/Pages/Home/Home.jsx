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
        </div>
        <div className="col-sm-6">
          <div className="card_div text-center">
            <div className="card_icon">
              <i class="fa-solid fa-sort-down"></i>
            </div>
            <h5 className="rajniti_h5">राजनीति</h5>
            <p className="rajniti_text">
               <span className="rajniti_spl">राजनीति -</span> ममता की नवीन पटनायक से मुलाकात, तीसरे मोर्चा को लेकर
              बनेगी बात
            </p>
            <img
              src="https://acharan.in/Admin_panel/public/image/news_image/1679576169.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-sm-3">
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
        </div>
      </div>
    </>
  );
};
