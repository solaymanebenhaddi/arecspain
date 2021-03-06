import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faHouseChimney,
  faBuilding,
  faMapLocation,
  faCity,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./header.css";
// import { Calendar } from "react-date-range";
// import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main date range style file
import "react-date-range/dist/theme/default.css"; // theme date range css file
// import { DateRangePicker } from "react-date-range";
// import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";

import { Button, Col, Container, Row } from "react-bootstrap";
import "../MultiRange/multirange.css";
const Header = ({ type }) => {

  const [City, setCity] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [ErrorPrice, setErrorPrice] = useState(false);
  // const [openDate, setOpenDate] = useState(false);
  const [TypeProp, setTypeProp] = useState("");
  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(Date.now()),
  //     endDate: new Date(Date.now()),
  //     key: "selection",
  //   },
  // ]);
  const [OpenOptions, setOpenOptions] = useState(false);
  // const [Options, setOptions] = useState({ adulte: 1, children: 0, room: 1 });

  // const handleOption = (name, operation) => {
  //   setOptions((prev) => {
  //     return {
  //       ...prev,
  //       [name]: operation === "i" ? Options[name] + 1 : Options[name] - 1,
  //     };
  //   });
  // };
  //we use useNavigate() from react-router-dom to transfer data to other destination pages.
  const navigate = useNavigate();

  const handleSearch = () => {
    
    if(minPrice>=maxPrice){
      setErrorPrice(true);
    }
    else{navigate("/Lists", { state: { City, minPrice, maxPrice, TypeProp } });}
    
  };
  // const handlePrice = (min, max) => {
  //   setMinPrice(min);
  //   setMaxPrice(max);
  // };

  return (
    <div className="header">
      <Container>
        <Row className="d-flex justify-content-center p-5">
          <Col className="col-md-12  ">
            <div className="headerList d-flex flex-wrap">
              <div className="headerListItems active ">
                {/* <img src="./img/headerbg.png"  alt="" className="headerImg"  /> */}
                <FontAwesomeIcon icon={faHouseChimney} />
                <span>Villas</span>
              </div>
              <div className="headerListItems">
                <FontAwesomeIcon icon={faBuilding} />
                <span>Appartement</span>
              </div>
              <div className="headerListItems">
                <FontAwesomeIcon icon={faMapLocation} />
                <span>Lands</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row
          className={
            type === "list"
              ? "headerContainer listMode"
              : "headerContainer m-auto"
          }
        >
          {type !== "list" && (
            <>
              
              <Row>
                {/* Hero Descrip */}
                <Col className="col-md-6">
                  <h1 className="headerTitle">
                    No need to worry with Get your dream house.
                  </h1>
                  <h3 className="headerDesc">
                    Get discount for your Dreams Property and Sign Up today.
                  </h3>
                  <Button className="headerBtn">Sign in / Registre</Button>
                </Col>
                {/* image hero */}
                <Col className="col-md-6 d-flex align-items-md-end">
                  <img
                    src="/assets/images/headerbg.png"
                    className="align-self-md-left"
                    alt=""
                  ></img>
                </Col>
              </Row>

              <Row className="headerSearch gap-4">
                <Col className="col-md-3 item">
                  {/* city to look in */}
                  <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCity} className="headerIcon" />
                    <input
                      type="text"
                      placeholder="Alicante"
                      className="headerSearchInput"
                      defaultValue={"Alicante"}
                      name="search"
                      id="searchD"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </Col>
                {/* Type of property  */}
                <Col className="col-md-3 item" style={{ width: "200px" }}>
                  <div className="headerSearchItem">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="headerIcon"
                    />

                    <div>
                      <select
                        className="form-select form-select-lg"
                        value={TypeProp}
                        onChange={(e) => setTypeProp(e.target.value)}
                      >
                        <option >--Select Property Type--</option>
                        <option value="Villas" className="p-3">
                          Villas
                        </option>
                        <option value="Appartement" className="p-3">
                          Appartement
                        </option>
                        <option value="Luxury" className="p-3">
                          Luxury Home Container
                        </option>
                        <option value="Lands" className="p-3">
                          Lands
                        </option>
                      </select>
                    </div>
                  </div>
                </Col>
                <Col className="col-md-3 item">
                  <div className="headerSearchItem">
                    <FontAwesomeIcon
                      icon={faSackDollar}
                      className="headerIcon"
                    />
                    <span
                      style={{ width: "200px" }}
                      onClick={() => setOpenOptions(!OpenOptions)}
                      className="headerSearchText"
                    >
                      {`${minPrice} Min Price . ${maxPrice} Max Price`}
                    </span>
                    {OpenOptions && (
                      <div className="options">
                        <div className="input-group input-group-sm my-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="inputGroup-sizing-sm"
                            >
                              Min Price :
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            aria-label="min"
                            onChange={(event) =>
                              {
                                setMinPrice(event.target.value);setErrorPrice(false);}
                            }
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                        <div className="input-group input-group-sm my-3">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="inputGroup-sizing-sm"
                            >
                              Max Price :
                            </span>
                          </div>
                          <input
                            type="text"
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                            }}
                            className="form-control"
                            aria-label="max"
                            onChange={(event) =>{
                              setMaxPrice(event.target.value);setErrorPrice(false);}
                            }
                            aria-describedby="inputGroup-sizing-sm"
                          />
                        </div>
                        {ErrorPrice && <div className="alert alert-danger" role="alert">
                                          You should Enter a Correct Range Min and Max Price!
                                        </div>}

                        {/* <MultiRange min={10000} max={100000} onChange={({ min, max }) => handlePrice(min,max)}/> */}
                      </div>
                    )}
                  </div>
                </Col>
                <Col className="col-md-2 item">
                  <Button className="headerBtn" onClick={handleSearch}>
                    Search
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Header;
