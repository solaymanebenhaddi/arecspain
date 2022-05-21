import React from 'react'
import './searchitem.css'
function SearchItem() {
  return (
    <div className='searchItem'>
        <img srcSet="https://cf.bstatic.com/xdata/images/hotel/max300/344881660.webp?k=24318a69ccb8d2e1848371fd01174637087e7626b16b972f6ee0c7e96ae4f7d3&o=" alt="" srcset="" className='siImg'/>
        <div className="siDesc">
            <h1 className="siTitle">Tower street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
                Entire Studio . 1 bathroom . 21m full bed
            </span>
            <span className="siCancelOp">Free cancellation
            </span>
            <span className="siCancelOpSubtitle">
                you can cancel later, so lock in this great price today
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
                </div>
                <div className="siDetailsTexts">
                    <span className="siPrice">$900</span>
                    <span className="siTaxOp">includes taxes and fees</span>
                    <button className='siCheckButton'>See availability</button></div>    
        </div>

    </div>
  )
}

export default SearchItem