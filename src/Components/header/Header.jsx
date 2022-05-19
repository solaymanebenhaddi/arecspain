import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faHouseChimney,
  faBuilding,
  faMapLocation,
  faCity,faSackDollar
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
import MultiRange from '../MultiRange/MultiRange'
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1);
  // const [openDate, setOpenDate] = useState(false);
  const [Show, setShow] = useState("show");
  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(Date.now()),
  //     endDate: new Date(Date.now()),
  //     key: "selection",
  //   },
  // ]);
  const [OpenOptions, setOpenOptions] = useState(false);
  const [Options, setOptions] = useState({ adulte: 1, children: 0, room: 1 });

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
    setShow("hide");
    navigate("/hotels", { state: { destination, minPrice,maxPrice, Options, Show } });
  };
  const handlePrice=(min,max)=>{
    setMinPrice(min);
    setMaxPrice(max);
    console.log('min :'+min+" max :"+max);
  }

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
              {console.log("Header value is : " + type)}
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
                   alt=""></img>
                </Col>
              </Row>

              <Row className="headerSearch">
                <Col className="col-md-3 item">
                  {/* city to look in */}
                  <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCity} className="headerIcon" />
                    <input
                      type="text"
                      placeholder="Alicante"
                      className="headerSearchInput"
                      name="search"
                      id="searchD"
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                </Col>
                {/* Type of property  */}
                <Col className="col-md-3 item" style={{width:'200px'}}>
                  <div className="headerSearchItem">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="headerIcon"
                    />
                    {/* <span
                      className="headerSearchText"
                      onClick={() => setOpenDate(!openDate)}
                    >
                     {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
                    </span> */}
                    <Dropdown className="w-75">
                      <Dropdown.Toggle
                        id="dropdownproptype"
                        variant="Light"
                      >
                        Select Property Type
                      </Dropdown.Toggle>

                      <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/" active>
                          Villas
                        </Dropdown.Item>
                        <Dropdown.Item href="#/">
                          Appartement
                        </Dropdown.Item>
                        <Dropdown.Item href="#/">
                          Luxury Containers House
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/">
                          Lands
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* {openDate && 
                                <DateRange editableDateInputs={true}
                                onChange={item=>setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date} className="date"
                                minDate={new Date()}/>} */}
                    {/* install date-fns : npm install date-fns */}
                  </div>
                </Col>
                <Col className="col-md-3 item" >
                  <div className="headerSearchItem">
                     <span style={{width:'200px'}}
                      onClick={() => setOpenOptions(!OpenOptions)}
                      className="headerSearchText"
                    ><FontAwesomeIcon icon={faSackDollar} className="headerIcon" />
                     {`${minPrice} Min Price . ${maxPrice} Max Price`}</span>
                    {OpenOptions && (
                      <div className="options">
                        
                      <MultiRange     min={10000} max={100000} onChange={({ min, max }) => handlePrice(min,max)}/>
                    
                        {/*
                        <div className="optionItem">
                          <span className="optionText">
                            {Options.adulte} Adult
                          </span>
                          <div className="optionCounter">
                            <Button
                              disabled={Options.adulte <= 1}
                              className="optionCounterButton"
                              onClick={() => handleOption("adulte", "d")}
                            >
                              -
                            </Button>
                            <span className="optionCounterNumber">
                              {Options.adulte}
                            </span>
                            <Button
                              className="optionCounterButton"
                              onClick={() => handleOption("adulte", "i")}
                            >
                              +
                            </Button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionText">
                            {Options.children} Children
                          </span>
                          <div className="optionCounter">
                            <Button
                              disabled={Options.children <= 0}
                              className="optionCounterButton"
                              onClick={() => handleOption("children", "d")}
                            >
                              -
                            </Button>
                            <span className="optionCounterNumber">
                              {Options.children}
                            </span>
                            <Button
                              className="optionCounterButton"
                              onClick={() => handleOption("children", "i")}
                            >
                              +
                            </Button>
                          </div>
                        </div>
                        <div className="optionItem">
                          <span className="optionText">
                            {Options.room} Roommm
                          </span>
                          <div className="optionCounter">
                            <Button
                              disabled={Options.room <= 1}
                              className="optionCounterButton"
                              onClick={() => handleOption("room", "d")}
                            >
                              -
                            </Button>
                            <span className="optionCounterNumber">
                              {Options.room}
                            </span>
                            <Button
                              className="optionCounterButton"
                              onClick={() => handleOption("room", "i")}
                            >
                              +
                            </Button>
                          </div>
                        </div>*/}
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
