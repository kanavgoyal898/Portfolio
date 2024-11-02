import React from 'react'

function NavigationBar(props) {
    return (
        <nav>
            <div>
            <ul className='flex flex-col gap-2'>
                {props.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            </div>
        </nav>
    )
}

export default NavigationBar
