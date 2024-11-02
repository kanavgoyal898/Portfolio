import React from 'react'

function Header(props) {
    return (
        <>
            <h2>
                <a href={props.homeURL}>home page</a>
                <span> of</span>
            </h2>
            <h1>
                {props.name}
            </h1>
            <h2>
                {props.designation}
            </h2>
            <h3>
                <a href={props.universityURL}>{props.universityName}</a>
            </h3>
        </>
    )
}

export default Header
