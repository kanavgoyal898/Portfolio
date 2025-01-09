import Intro from './Intro'

const sections = [
    {
        id: 'section1',
        slides: [
            { title: 'Harvey Specter', content: 'I don’t play the odds, I play the man.' },
            { title: 'Mike Ross', content: 'Sometimes good guys gotta do bad things to make the bad guys pay.' },
            { title: 'Louis Litt', content: 'You’re not going to win this case. But I will.' },
        ],
    },
    {
        id: 'section2',
        slides: [
            { title: 'Harvey Specter', content: 'I don’t play the odds, I play the man.' },
            { title: 'Mike Ross', content: 'Sometimes good guys gotta do bad things to make the bad guys pay.' },
            { title: 'Louis Litt', content: 'You’re not going to win this case. But I will.' },
        ],
    },
    {
        id: 'section3',
        slides: [
            { title: 'Harvey Specter', content: 'I don’t play the odds, I play the man.' },
            { title: 'Mike Ross', content: 'Sometimes good guys gotta do bad things to make the bad guys pay.' },
            { title: 'Louis Litt', content: 'You’re not going to win this case. But I will.' },
        ],
    },
    {
        id: 'section4',
        slides: [
            { title: 'Harvey Specter', content: 'I don’t play the odds, I play the man.' },
            { title: 'Mike Ross', content: 'Sometimes good guys gotta do bad things to make the bad guys pay.' },
            { title: 'Louis Litt', content: 'You’re not going to win this case. But I will.' },
        ],
    },
    {
        id: 'section5',
        slides: [
            { title: 'Harvey Specter', content: 'I don’t play the odds, I play the man.' },
            { title: 'Mike Ross', content: 'Sometimes good guys gotta do bad things to make the bad guys pay.' },
            { title: 'Louis Litt', content: 'You’re not going to win this case. But I will.' },
        ],
    },
    {
        id: 'section6',
        slides: [
            { title: 'Harvey Specter', content: 'I don’t play the odds, I play the man.' },
            { title: 'Mike Ross', content: 'Sometimes good guys gotta do bad things to make the bad guys pay.' },
            { title: 'Louis Litt', content: 'You’re not going to win this case. But I will.' },
        ],
    },
    {
        id: 'section7',
        slides: [
            { title: 'Harvey Specter', content: 'I don’t play the odds, I play the man.' },
            { title: 'Mike Ross', content: 'Sometimes good guys gotta do bad things to make the bad guys pay.' },
            { title: 'Louis Litt', content: 'You’re not going to win this case. But I will.' },
        ],
    },
]

const ContentSection = () => {
    return (
        <div className="ml-[33.3%] w-[66.6%] h-screen pe-10 overflow-y-auto">
            {sections.map((section, index) => (
                <div key={ index } id={ section.id } className="pt-32 pb-2 min-h-full flex flex-col items-start justify-start">
                    <Intro slides={ section.slides } />
                </div>
            ))}
        </div>
    )
}

export default ContentSection
