import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const icons = [
    {
        icon: faEnvelope,
        link: 'mailto:kanavgoyal898@gmail.com',
    },
    {
        icon: faEnvelope,
        link: 'mailto:kanavgoyal898@gmail.com',
    },
    {
        icon: faEnvelope,
        link: 'mailto:kanavgoyal898@gmail.com',
    },
]

function Socials() {
    return (
        <div className='action-center-section'>
            <a href='mailto:kanavgoyal898@gmail.com'>
                kanavgoyal898@gmail.com
            </a>
            <div className='icon-list'>
                {icons.map((icon, index) => {
                    return (
                        <a key={index} href={icon.link}>
                            <FontAwesomeIcon icon={icon.icon}></FontAwesomeIcon>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Socials