import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Header() {

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
            <div className="topBarParentDiv fnt-9">
            <div className="topBarChildDiv ">
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
            <nav className="navbar navbar-expand-lg bg-body-tertiary achranBorder">
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
                class="offcanvas offcanvas-end "
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
                >
                <div class="offcanvas-header cl-w-1">
                    <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body cl-w cl-w-1 hearder-d">
                    <ul className="d-f-g-29">
                    <li>
                        <Link
                        className="nav-link active fnt-20"
                        aria-current="page"
                        to="#"
                        >
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
                            <p className="mg-r-45">मध्य प्रदेश</p>
                            <span className="b-1"></span>
                            <p className="mg-r-45">मध्य प्रदेश</p>
                            <span className="b-1"></span>
                            <p className="mg-r-45">मध्य प्रदेश</p>
                            <span className="b-1"></span>
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
                    {/* <li className="nav-item">
                        <Link className="nav-link disabled ">Disabled</Link>
                    </li> */}
                    </ul>
                    <form className="d-flex search-f-button" role="search">
                    <input
                        className="form-control me-2 searchbutton"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    ></input>
                    <i class="fa fa-search search-icon" aria-hidden="true" />
                    {/* <button className="btn btn-outline-successb search-button" type="submit">
                        Search
                        </button>*/}
                    </form>
                </div>
                </div>
            </div>
            </nav>

            <div className="d-flex gap-10px fnt-9 overflowXAuto mar-t14">
            <div className="">
                <p className="text-nowrap ">आचरण फोकस</p>
            </div>
            <div className="">
                <p className="text-nowrap achranBarText">Top News</p>
            </div>
            <div className="">
                <p className="text-nowrap achranBarText">अन्य</p>
            </div>
            <div className="">
                <p className="text-nowrap achranBarText">पॉजिटिव खबरें</p>
            </div>
            <div className="">
                <p className="text-nowrap achranBarText">वेब स्टोरीज</p>
            </div>
            <div className="">
                <p className="text-nowrap achranBarText">राजनीति</p>
            </div>
            </div>

            <Outlet />
            {/* footer */}
        </div>
        </>
    );
}

export default Header;
