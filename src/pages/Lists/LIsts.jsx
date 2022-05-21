
import React ,{useState}from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import SearchItem from "../../Components/SearchItem/SearchItem";
import "./lists.css";
function Lists() {
 //in this case we use useLocation() Hook to recive date from useNavigate() Hook.
   const location=useLocation();
   const [City,setCity]=useState(location.state.City)
   const [Minprice,setMinPrice]=useState(location.state.minPrice)
   const [Maxprice,setMaxPrice]=useState(location.state.maxPrice)
   const [TypeProp,setTypeProp]=useState(location.state.TypeProp)
   const [ErrorPrice, setErrorPrice] = useState(false);
   const handleSearch = () => {
    
    if(Minprice>=Maxprice){
      setErrorPrice(true);
    }
    else{}
    
  };

   
  return (
    <div>
      <Navbar />
      <Header type="list"/>
  {console.log(" city :" +City)}
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">City :</label>
              <input type="text" defaultValue={City} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="lsItem">
              <label htmlFor="">Property Type :</label>
              <div>
                      <select
                        className="form-select form-select-lg"
                        defaultValue={TypeProp}
                        onChange={(e) => setTypeProp(e.target.value)}
                      >
                        
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
              {/* <span onClick={()=>setOpenDate(!OpenDate)} className="">
                            {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
                </span> */}
                {/* {OpenDate && <DateRange   editableDateInputs={true}
                        onChange={item=>setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}/>} */}
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptions">

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min Price <small>property</small>
                </span>
                <input 
                type="text"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }} 
                className="lsOptionInput" 
                defaultValue={Minprice}
                onChange={(event) =>
                  {
                    setMinPrice(event.target.value);setErrorPrice(false);}
                } />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  max Price <small>property</small>
                </span>
                <input 
                type="text"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }} 
                className="lsOptionInput" 
                defaultValue={Maxprice}
                onChange={(event) =>
                  {
                    setMaxPrice(event.target.value);setErrorPrice(false);}
                } />
              </div>
              {ErrorPrice && <div className="alert alert-danger" role="alert">
                                          You should Enter a Correct Range Min and Max Price!
                                        </div>}
            </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="listResulte">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Lists;
