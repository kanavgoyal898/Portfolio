import React from 'react'

function Header(props) {
    return (
        <>
            <h2 className='text-xl'>
                <a href={props.homeURL}>home page</a>
                <span> of</span>
            </h2>
            <h1 className='text-3xl font-bold'>
                {props.name}
            </h1>
            <h2 className='text-2xl'>
                Undergraduate Student
                <br />
                Practice of Computer Science
            </h2>
            <h3>
                <a href={props.universityURL}>{props.universityName}</a>
            </h3>
        </>
    )
}

export default Header
