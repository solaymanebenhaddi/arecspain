import { format } from "date-fns";
import React ,{useState}from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/navbar/Navbar";
import SearchItem from "../../Components/SearchItem/SearchItem";
import "./lists.css";
function Lists() {
 //in this case we use useLocation() Hook to recive date from useNavigate() Hook.
   const location=useLocation();
   const [destination,setDestination]=useState(location.state.destination)
   const [date,setDate]=useState(location.state.date)
   const [Options,setOptions]=useState(location.state.Options)
   const [OpenDate,setOpenDate]=useState(false)
   const [Show, setShow] = useState(location.state.Show);
  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">City :</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in Date</label>
              <span onClick={()=>setOpenDate(!OpenDate)} className="">
                            {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
                </span>
                {OpenDate && <DateRange   editableDateInputs={true}
                        onChange={item=>setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date()}/>}
            </div>
            <div className="lsItem">
              <label htmlFor="">Options</label>
              <div className="lsOptions">

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min Price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  max Price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div><div className="lsOptionItem">
                <span className="lsOptionText">
                  Adulte
                </span>
                <input type="number" className="lsOptionInput" min={1} placeholder={Options.adulte} />
              </div><div className="lsOptionItem">
                <span className="lsOptionText">
                  Children
                </span>
                <input type="number" className="lsOptionInput" min={0} placeholder={Options.children} />
              </div><div className="lsOptionItem">
                <span className="lsOptionText">
                  Room
                </span>
                <input type="number" className="lsOptionInput"min={1} placeholder={Options.room}/>
              </div>
            </div>
            </div>
            <button>Search</button>
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
