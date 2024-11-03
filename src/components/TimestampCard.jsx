import React from 'react'

function TimestampCard(props) {
    return (
        <div className='my-1'>
            <dt className='font-bold'>{`${props.month}, ${props.year}`}</dt>
            <dl>{props.description}</dl>
        </div>
    )      
}

export default TimestampCard
