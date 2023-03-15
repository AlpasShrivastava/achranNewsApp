import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="container">
        <div className="topBarParentDiv">
          <div className="topBarChildDiv">
            <div className="topbarText">
              <p>शक्ति</p>
            </div>
            <div className="topbarText">
              <p>क्रिकेट</p>
            </div>
            <div className="topbarText">
              <p>फैशन</p>
            </div>
            <div className="topbarText">
              <p>लाइफ & साइंस</p>
            </div>
            <div className="topbarText">
              <p>यूटिलिटी</p>
            </div>
            <div className="topbarText">
              <p>जीवन मंत्र</p>
            </div>
            <div className="topbarText">
              <p>बॉलीवुड</p>
            </div>
            <div className="topbarText">
              <p>मैगजीन</p>
            </div>
          </div>
          <div className="d-flex gap-5px">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              <img src="https://acharan.in/img/logo.png" alt="achran" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas" 
              data-bs-target="#offcanvasRight" 
              aria-controls="offcanvasRight"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end cl-w"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                {" "}
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">
                    मध्य प्रदेश
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    देश
                  </Link>
                </li>
                <li className="nav-item" onMouseEnter={toggleSubMenu}>
                  Dropdown
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    दुनिया
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    मनोरंजन
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    खेल
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onMouseOver={() => setDisableState(false)}
                  onMouseLeave={() => setDisableState(true)}
                >
                  <Link
                    className="nav-link"
                    to="#"
                    onMouseOver={() => setDisableState(false)}
                    onMouseLeave={() => setDisableState(true)}
                  >
                    राज्य
                  </Link>
                  {!disableState ? (
                    <div
                      style={{ zIndex: "1", position: "absolute" }}
                      className="statename"
                    >
                      <p>Alpas</p>
                      <p>Alpas</p>
                      <p>Alpas</p>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    // data-bs-toggle="dropdown"
                    // aria-expanded="false"
                  >
                    Dropdown
                  </Link>

                  {handleDropdownMenu == true ? (
                    <>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="#">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : (
                    ""
                  )}
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled">Disabled</Link>
                </li>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>

        <div className="d-flex gap-10px">
          <div className="">
            <p>Shakti</p>
          </div>
          <div className="">
            <p>Shakti</p>
          </div>
          <div className="">
            <p>Shakti</p>
          </div>
          <div className="">
            <p>Shakti</p>
          </div>
          <div className="">
            <p>Shakti</p>
          </div>
          <div className="">
            <p>Shakti</p>
          </div>
          <div className="">
            <p>Shakti</p>
          </div>
          <div className="">
            <p>Shakti</p>
          </div>
          <div className="">
            <p>Shakti</p>
          </div>
        </div>

        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://lh3.googleusercontent.com/x1WyFcrzqNGHScnBcYQsaJcmss_VyxqK0Zlwa5dPY5vPOPSw899OfesiTH9GLnoG8Us=h500"
                className="d-block w-100 h-500"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://lh3.googleusercontent.com/x1WyFcrzqNGHScnBcYQsaJcmss_VyxqK0Zlwa5dPY5vPOPSw899OfesiTH9GLnoG8Us=h500"
                className="d-block w-100 h-500"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://lh3.googleusercontent.com/x1WyFcrzqNGHScnBcYQsaJcmss_VyxqK0Zlwa5dPY5vPOPSw899OfesiTH9GLnoG8Us=h500"
                className="d-block w-100 h-500"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
