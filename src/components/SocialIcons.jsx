import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialIcons(props) {
    return (
        <p className='social-icons'>
            {props.socialIcons.map((icon, index) => (
                <a key={index} href={icon.url} className='mx-1'>
                    {<FontAwesomeIcon icon={icon.icon} />}
                </a>
            ))}
        </p>
    )
}

export default SocialIcons
