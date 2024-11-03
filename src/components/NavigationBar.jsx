import React from 'react'

function NavigationBar(props) {
    return (
        <nav className='nav-section'>
            <div>
            <ul className='vertical-list'>
                {props.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            </div>
        </nav>
    )
}

export default NavigationBar
