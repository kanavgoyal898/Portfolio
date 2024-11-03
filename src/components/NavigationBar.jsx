import react from 'react'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const items = [
    {
        url: '/goyal/',
        title: 'Home',
    },
    {
        url: '/goyal/',
        title: 'Home',
    },
    {
        url: '/goyal/',
        title: 'Home',
    },
]

function Header() {
    let [collapsed, setCollapsed] = useState(true)

    return (
        <div className='action-center-section'>
            <button onClick={()=>setCollapsed(!collapsed)} className='burger-button'>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </button>
            <ul className={`action-center-nav ${collapsed?'hidden':'flex'}`} >
                {items.map((item, index)=> {
                    return (
                        <li key={index} className='action-center-nav-item'>
                            <a href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Header
