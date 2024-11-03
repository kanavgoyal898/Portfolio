import React from 'react'

function Figure(props) {
    return (
        <figure className='vertical-list'>
              <a href={props.src}>
                <img src={props.src} alt={props.caption}/>
              </a>
              <figcaption className='hidden md:inline mt-2 mb-8 text-sm text-lightQuaternaryO dark:text-darkQuaternaryO text-right'>{props.caption}</figcaption>
        </figure>
    )
}

export default Figure
