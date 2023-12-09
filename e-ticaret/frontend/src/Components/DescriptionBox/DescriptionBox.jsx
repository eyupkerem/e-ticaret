import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur unde nemo doloremque illo quo quae magnam nobis amet labore voluptatibus!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde eligendi alias atque perspiciatis, minima voluptatibus incidunt placeat cumque odio non asperiores reiciendis illo expedita optio?</p>
        </div>
    </div>
  )
}
