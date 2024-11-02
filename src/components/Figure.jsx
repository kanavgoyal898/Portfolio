import React from 'react'

function Figure(props) {
    return (
        <figure>
              <a href={props.src} className='flex flex-col text-right w-5/6'>
                <img src={props.src} alt={props.caption}/>
                <figcaption className='py-2 text-right'>{props.caption}</figcaption>
              </a>
        </figure>
    )
}

export default Figure
