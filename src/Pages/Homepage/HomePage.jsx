import React from 'react'
import './HomePage.css'
import Welcome from '../../Components/Welcome/Welcome'

const HomePage = ({offers}) => {



  return (
    <div className='div'>
      <Welcome></Welcome>
      <button className="button"></button>
      <img src="" alt="" ></img>
      <input></input>
      <h2>Ofertas abiertas({offers})</h2>
      
     </div>
  )
}

export default HomePage
