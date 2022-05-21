import React,{useState} from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Header from '../../Components/header/Header'
import Footer from '../../Components/footer/Footer'
import MailList from '../../Components/mail/Mail'
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './property.css'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

function Property() {
  const [Open, setOpenSlide] = useState(false);
  const [SlideNumber, setSlideNumber] = useState(0);
  const handleOpen=(indice)=>{
    setSlideNumber(indice)
    setOpenSlide(true)

  }
  const handleMove=(direction)=>{
    let newSliderNumber;
    if(direction==="l"){
      newSliderNumber= SlideNumber === 0? 5: SlideNumber-1;
    }
    else{
      newSliderNumber= SlideNumber === 5?0: SlideNumber+1;
    }
    setSlideNumber(newSliderNumber)
  }

  const photos=[
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max300/216084939.webp?k=474993f0aa40892ec36ecc46bbb3a2a0db1e53ed22b53398361dff63f4db99e3&o=",
    },
    {
      src:"https://media.istockphoto.com/photos/hotel-room-suite-with-view-picture-id627892060?k=20&m=627892060&s=612x612&w=0&h=k6QY-qWNlFbvYhas82e_MoSXceozjrhhgp-krujsoDw=",
    },
    {
      src:"https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg",
    },
    {
      src:"http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg",
    },
    {
      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJevK1IFSZcX8D4ZBZwu_hp_RxgoLKkqJIEQ&usqp=CAU",
    },
    {
      src:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      src:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cvent.com%2Fen%2Fblog%2Fhospitality%2Ftypes-of-hotel-rooms&psig=AOvVaw1Pa_CBVrGh6us1N8AtQgnM&ust=1652740845528000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJCvm8rJ4vcCFQAAAAAdAAAAABAl",
    }
  ]
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
        <div className="hotelContainer">
          { Open &&<div className="sliderContainer">
              <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpenSlide(false)}/>
              <FontAwesomeIcon onClick={()=>handleMove("l")} className="arrow" icon={faCircleArrowLeft}/>
              <div className="sliderWrapper">
                <img srcSet={photos[SlideNumber].src} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon onClick={()=>handleMove("r")} className="arrow" icon={faCircleArrowRight}/>
            </div>}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">Grand Hotel</h1>
            <div className="hotelAdress">
               <FontAwesomeIcon icon={faLocationDot}/>
               <span>Elton St 124 New York</span>
            </div>
            <span className="hotelDistance">
              Excellent Location - 500m from center
            </span>
            <span className='hotelPriceHighLight'>
              Book a stay over $111 at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
              {photos.map((photo,id)=>(
                <div className="hotelImgWrapper">
                  <img key={id} onClick={()=>handleOpen(id)} srcSet={photo.src} alt="" className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailstexts">
                <h1 className="hotelDetailsTitle">Stay in the heart of Krakaw</h1>
                <p className="hotelDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati distinctio dolores tempore hic veniam voluptates ad molestias vel in a aspernatur magni fugiat natus iste, dolorum perspiciatis quasi soluta nam repellat quo? Assumenda, fugiat impedit eius in aperiam similique expedita quas doloribus aspernatur commodi, magnam explicabo eos quod cumque, laudantium voluptatum facere iste necessitatibus.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                  <h1>Perfect for a 9-night stay!</h1>
                  <span>
                    located in the real heart pf Krakaw, this property has an ecellent location score pf 9.8
                  </span>
                  <h2><b>$956</b>(9 nights)
                  </h2>
                  <button>Reserve or Book Now!</button>
              </div>
            </div>

          </div>
          <MailList/>
          <Footer/>

        </div>

    </div>
  )
}

export default Property