import { useState } from 'react'

const slides = [
    { title: 'Slide 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit, ligula id tincidunt ultrices, justo sapien cursus arcu, nec venenatis magna orci a sapien. Fusce tempor eget orci nec.' },
    { title: 'Slide 2', content: 'Placeholder text serves as a visual guide in design or development, allowing users to focus on layout and structure. Replace this with relevant content to ensure your application meets its purpose.' },
    { title: 'Slide 3', content: 'This is a sample placeholder text meant to fill space and demonstrate layout. Modify it with appropriate information to provide valuable context, enhancing the readability and clarity of your project.' },
]

const Intro = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleHeadingClick = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div className="w-full">
            <div className="flex justify-start mb-4 gap-4">
                {slides.map((slide, index) => (
                    <p key={ index } className={`cursor-pointer ${ index === currentIndex ? 'text-black dark:text-white' : '' } text-accentLight dark:text-accentDark`} onClick={ () => handleHeadingClick(index) }>
                        { slide.title }
                    </p>
                ))}
            </div>

            <div className="w-full">
                <div className="flex transition-all duration-0 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)`, }}>
                    {slides.map((slide, index) => (
                        <div key={ index } className="flex-shrink-0 w-full" style={{ opacity: index === currentIndex ? 1 : 0, pointerEvents: index === currentIndex ? 'auto' : 'none', transition: 'opacity 0.3s ease-in-out', }}>
                            <p className="text-6xl">{ slide.content }</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Intro
