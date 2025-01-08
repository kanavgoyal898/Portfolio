import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faInstagram, faLinkedinIn, faSnapchat, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faKeyboard } from '@fortawesome/free-solid-svg-icons'

const icons = [
    {
        icon: faGithub,
        link: 'https://github.com/kanavgoyal898',
    },
    {
        icon: faInstagram,
        link: 'https://www.instagram.com/_kanav_6868/',
    },
    {
        icon: faLinkedinIn,
        link: 'https://in.linkedin.com/in/kanavgoyal898',
    },
    {
        icon: faSnapchat,
        link: 'https://snapchat.com/t/MR76SJfX',
    },
    {
        icon: faXTwitter,
        link: 'https://x.com/kanavgoyal898',
    },
]

function Socials() {
    return (
        <div className='action-center-section'>
            <h3>
                <a href='mailto:kanavgoyal898@gmail.com' className='hover:underline'>
                    <h2>
                        kanavgoyal898@gmail.com
                    </h2>
                </a>
            </h3>
            <div className='icon-list'>
                {icons.map((icon, index) => {
                    return (
                        <a key={index} href={icon.link} target='_blank'>
                            <h2>
                                <FontAwesomeIcon icon={icon.icon}></FontAwesomeIcon>
                            </h2>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Socials