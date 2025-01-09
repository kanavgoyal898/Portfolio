import { useState } from 'react'

const Intro = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleHeadingClick = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div className="w-full">
            <div className="flex justify-start mb-4 gap-4">
                {slides.map((slide, index) => (
                    <p key={ index } className={`cursor-pointer ${ index === currentIndex ? 'text-black dark:text-white' : '' } text-accentLight dark:text-accentDark`} onClick={() => handleHeadingClick(index)}>
                        { slide.title }
                    </p>
                ))}
            </div>
            <div className="flex text-6xl">
                <p>{slides[currentIndex].content}</p>
            </div>
        </div>
    )
}

export default Intro