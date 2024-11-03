import React from 'react'

const timestamps = [
    {
        title: 'Month, Year',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur exercitationem officiis necessitatibus voluptate aliquam. Repellendus quaerat eum, odit, aut quis deserunt porro tempore esse vel veritatis delectus voluptates sequi nobis eligendi nihil!',
    },
    {
        title: 'Month, Year',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur exercitationem officiis necessitatibus voluptate aliquam. Repellendus quaerat eum, odit, aut quis deserunt porro tempore esse vel veritatis delectus voluptates sequi nobis eligendi nihil!',
    },
    {
        title: 'Month, Year',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur exercitationem officiis necessitatibus voluptate aliquam. Repellendus quaerat eum, odit, aut quis deserunt porro tempore esse vel veritatis delectus voluptates sequi nobis eligendi nihil!',
    }
]

function Timestamps() {
    return (
        <div className='timeline-cards bg-transparent'>
            <ul>
                {timestamps.map((timestamp, index) => {
                    return (
                        <li key={index} className='timeline-card bg-transparent'>
                            <h3>{timestamp.title}</h3>
                            <p>{timestamp.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Timestamps
