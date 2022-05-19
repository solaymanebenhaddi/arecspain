import React from "react";
// import { Container, Row, Col, Image } from "react-bootstrap";
// import Animation from "./Animation";
// import Typed from "react-typed";
import Features from '../Components/Features/Features'
import Footer from '../Components/footer/Footer'
import Header from '../Components/header/Header'
import Maillist from '../Components/mail/Mail'
import Navigationbar from '../Components/navbar/Navbar'
import PreferedPro from '../Components/preferedprop/PreferedProp'
import PropertyList from '../Components/PropertyList/PropertyList'
import "./home.css";
function Home() {
  return (
       <>
    <Navigationbar/>
    <Header/>
    <div className="homeContainer"> 
    <Features/>
         <h1 className="homeTitle">Brows by property Type</h1>
    <PropertyList/>
         <h1 className="homeTitle">Homes guests love</h1>
    <PreferedPro/>
    <Maillist/>
    <Footer/>
    </div>
    {/*<Row className="vh-100 d-flex align-items-center  ">
      <Col className="col-md-12 d-flex align-items-center flex-column">
        <Image
          src="../../assets/images/logo-hero.png"
          className="img"
        ></Image>
        <h3>Andaluce real estate and Construction</h3>
        <p>Comming Soon ...</p>
         npm install react-typed --save 
        <Typed strings={["Here you can find anything"]} typeSpeed={40} backSpeed={50} loop />
      </Col>
    </Row>*/}
    </>



  
  );
}
export default Home;