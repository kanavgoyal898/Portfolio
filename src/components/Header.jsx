import React from 'react'

function Header(props) {
    return (
        <div className='nav-section'>
            <h2>
                <a href={props.homeURL}>home page</a>
                <span> of</span>
            </h2>
            <h1 className='my-1 text-3xl font-bold'>
                {props.name}
            </h1>
            <h2>
                Undergraduate Student
                <br />
                Practice of Computer Science
            </h2>
            <h3>
                <a href={props.universityURL}>{props.universityName}</a>
            </h3>
        </div>
    )
}

export default Header
