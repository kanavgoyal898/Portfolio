import React from 'react'

import goyalImage from '../assets/goyal.png';

function Image() {
    return (
        <div className='result-figure bg-orange-100'>
            <img src={goyalImage} alt='goyal.png' className='result-image'/>
            <p>Kanav Goyal @NITJ</p>
        </div> 
    )
}

export default Image
