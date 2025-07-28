import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>

        <div className="hero-text-group">
          <div className='hero-hand-icon'>
            <p>Fresh</p>
            <img src={hand_icon} alt="hand icon" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>

        <div className="hero-latest-btn">
          <span>Explore Now</span>
          <img src={arrow_icon} alt="arrow icon" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="hero section" />
      </div>
    </div>
  )
}
