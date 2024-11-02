import React from 'react'

function Figure(props) {
    return (
        <figure>
              <a href={props.src}>
                <img src={props.src} alt={props.caption} />
              </a>
              <figcaption className="text-right">{props.caption}</figcaption>
        </figure>
    )
}

export default Figure
