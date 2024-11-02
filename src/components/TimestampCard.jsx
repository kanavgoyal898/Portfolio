import React from 'react'

function TimestampCard(props) {
    return (
        <div className='py-2'>
            <dt className='text-md font-semibold'>{`${props.month}, ${props.year}`}</dt>
            <dl className='text-md font-medium'>{props.description}</dl>
        </div>
    )      
}

export default TimestampCard
