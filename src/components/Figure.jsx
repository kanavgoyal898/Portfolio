import React from 'react'

function Figure(props) {
    return (
        <figure className='vertical-list'>
              <a href={props.src}>
                <img src={props.src} alt={props.caption}/>
              </a>
              <figcaption className='mt-2 mb-8 text-sm text-right'>{props.caption}</figcaption>
        </figure>
    )
}

export default Figure
