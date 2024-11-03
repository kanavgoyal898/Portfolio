import React from 'react'

import Header from './Header'
import Socials from './Socials'
import NavigationBar from './NavigationBar'

const items = [
    "Navigation Item",
    "Navigation Item",
    "Navigation Item"
]

function LeftSection(props) {
    return (
        <aside className='bg-red-100 dark:bg-blue-100 navigation-section'>
            <Header homeURL='/goyal/' name='Kanav Goyal' universityName='NIT Jalandhar' universityURL='https://www.nitj.ac.in' />
            <Socials mail='kanavgoyal898@gmail.com' />
            <NavigationBar items={items}/>
        </aside>
    )
}

export default LeftSection
