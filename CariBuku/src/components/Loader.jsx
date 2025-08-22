import React from 'react'
import Loaderimg from "../../images/loader.svg"
import "./Loader.css"

const Loader = () => {
  return (
    <div>
        <div className='loader flex flex-c'>
      <img src = {Loaderimg} alt = "loader" />
    </div>
    </div>
  )
}

export default Loader
