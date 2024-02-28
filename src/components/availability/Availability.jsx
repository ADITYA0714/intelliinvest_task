import React from 'react'
import "./availability.css"

const Availability = () => {
  return (
    <>
      <div className="location__container">
        <div className="location__img">
            <img src="https://img.freepik.com/premium-vector/location-travel-road-white-background-vector-illustration_547150-344.jpg?size=626&ext=jpg&ga=GA1.1.1142284094.1709041652&semt=sph"
                alt="" srcset="" />
        </div>
        <div className="location__text">
            <h1>Enter your pincode to check availability and faster delivery options.</h1>
            <input type="text" className="location__text-input" value="" placeholder='Enter Pincode' />
        </div>
        <div className="location__btn">
            <button type="button" className="location__btn-btn">Submit</button>
        </div>
    </div>
    </>
  )
}

export default Availability
