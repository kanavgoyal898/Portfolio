import Figure from './Figure'
import Timeline from './Timeline'

import goyalImage from '../assets/goyal.png'

function HomeSection() {
    return (
        <main className='bg-blue-100 dark:bg-red-100 home-section'>
            <div className='px-4 md:min-ps-4 md:min-pe-16 2xl:max-w-4xl'>
                <Figure src={goyalImage} caption={'Kanav Goyal @NITJ'}/>
                <Timeline />
            </div>
        </main>
    )
}

export default HomeSection
