import React from 'react'

import SocialIcons from './SocialIcons'

import { faComputer } from '@fortawesome/free-solid-svg-icons'

const socialIcons = [
    {url: "", icon: faComputer},
    {url: "", icon: faComputer},
    {url: "", icon: faComputer}
]

function Socials(props) {
    return (
        <div className='py-6'>
            <h3>
                <a href={"mailto:" + props.mail}>{props.mail}</a>
            </h3>
            <SocialIcons socialIcons={socialIcons} />
        </div>
    )
}

export default Socials
