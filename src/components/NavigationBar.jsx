import react from 'react'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const items = [
    {
        url: '/goyal/',
        title: 'Bio',
    },
    {
        url: '/goyal/',
        title: 'Skills',
    },
    {
        url: '/goyal/',
        title: 'Projects',
    },
    {
        url: '/goyal/',
        title: 'Education',
    },
    {
        url: '/goyal/',
        title: 'Experience',
    },
    {
        url: '/goyal/',
        title: 'Publications',
    },
    {
        url: '/goyal/',
        title: 'Extra-curriculars',
    },
]

function Header() {
    let [collapsed, setCollapsed] = useState(true)

    return (
        <div className='action-center-section'>
            <button onClick={()=>setCollapsed(!collapsed)} className='burger-button'>
                <h2>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </h2>
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
