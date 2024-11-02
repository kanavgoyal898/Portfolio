import React from 'react'

function TimestampCard(props) {
    return (
        <>
            <dt>{`${props.month}, ${props.year}`}</dt>
            <dl>{props.description}</dl>
        </>
    )      
}

export default TimestampCard
