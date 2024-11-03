import React from 'react'

function Header(props) {
    return (
        <div className='nav-section'>
            <h2 className='text-lightTertiary dark:text-darkTertiary'>
                <a href={props.homeURL}>home page</a>
                <span> of</span>
            </h2>
            <h1 className='name'>
                {props.name}
            </h1>
            <h2 className='text-lightQuaternary dark:text-darkQuaternary '>
                Undergraduate Student
                <br />
                Practice of Computer Science
            </h2>
            <h3 className='text-lightTertiary dark:text-darkTertiary'>
                <a href={props.universityURL}>{props.universityName}</a>
            </h3>
        </div>
    )
}

export default Header
