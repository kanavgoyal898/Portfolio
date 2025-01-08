import React from 'react'

import goyalImage from '../assets/goyal.png';

function Image() {
    return (
        <div className='result-figure bg-transparent'>
            <img src={goyalImage} alt='goyal.png' className='result-image'/>
            <p className='caption'>Kanav Goyal @NITJ</p>
        </div> 
    )
}

export default Image
