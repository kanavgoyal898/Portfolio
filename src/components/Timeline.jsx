import React from 'react'

import TimestampCard from './TimestampCard'

const timestamps = [
    {month: "Month", year: "Year", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque voluptatibus voluptate unde veritatis velit inventore voluptatem repellat saepe aliquam? Id magnam eveniet aperiam temporibus saepe quisquam quibusdam corporis deserunt consectetur quod tenetur omnis nostrum sit, iste exercitationem dolores beatae minima et, tempore pariatur dolore. Quod nam autem, recusandae temporibus reiciendis repudiandae, officia culpa, ea laboriosam vel debitis velit impedit consectetur blanditiis vero nihil?"},
    {month: "Month", year: "Year", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque voluptatibus voluptate unde veritatis velit inventore voluptatem repellat saepe aliquam? Id magnam eveniet aperiam temporibus saepe quisquam quibusdam corporis deserunt consectetur quod tenetur omnis nostrum sit, iste exercitationem dolores beatae minima et, tempore pariatur dolore. Quod nam autem, recusandae temporibus reiciendis repudiandae, officia culpa, ea laboriosam vel debitis velit impedit consectetur blanditiis vero nihil?"},
    {month: "Month", year: "Year", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cumque voluptatibus voluptate unde veritatis velit inventore voluptatem repellat saepe aliquam? Id magnam eveniet aperiam temporibus saepe quisquam quibusdam corporis deserunt consectetur quod tenetur omnis nostrum sit, iste exercitationem dolores beatae minima et, tempore pariatur dolore. Quod nam autem, recusandae temporibus reiciendis repudiandae, officia culpa, ea laboriosam vel debitis velit impedit consectetur blanditiis vero nihil?"}
]

function Timeline() {
    return (
        <dl>
            {timestamps.map((timestamp, index) => (
                <TimestampCard key={index} month={timestamp.month} year={timestamp.year} description={timestamp.description}/>
            ))}
        </dl>
    )
}

export default Timeline
