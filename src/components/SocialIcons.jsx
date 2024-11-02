import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialIcons(props) {
    return (
        <p className="flex gap-2 justify-end">
            {props.socialIcons.map((icon, index) => (
                <a key={index} href={icon.url}>
                    {<FontAwesomeIcon icon={icon.icon} />}
                </a>
            ))}
        </p>
    )
}

export default SocialIcons
