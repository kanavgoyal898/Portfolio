const navigationItems = [
    { name: 'Section 1', id: 'section1' },
    { name: 'Section 2', id: 'section2' },
    { name: 'Section 3', id: 'section3' },
    { name: 'Section 4', id: 'section4' },
    { name: 'Section 5', id: 'section5' },
    { name: 'Section 6', id: 'section6' },
    { name: 'Section 7', id: 'section7' },
]

const handleScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
}

const NavigationSection = () => {
    return (
        <div className="flex basis-2/3">
            <nav className="flex flex-col">
                {navigationItems.map((item, index) => (
                    <button key={index} onClick={() => handleScroll(item.id)} className="flex">
                        {item.name}
                    </button>
                ))}
            </nav>
        </div>
    )
}

export default NavigationSection
