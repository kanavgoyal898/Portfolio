import { useEffect, useState } from 'react'

const handleScroll = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: 'smooth' })
}

const NavigationSection = ({ navigationItems }) => {
    const [activeSection, setActiveSection] = useState()

    useEffect(() => {
        const sections = navigationItems.map(item => document.getElementById(item.id))
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.48 }
        )
        
        sections.forEach(section => observer.observe(section))
        
        return () => {
            observer.disconnect()
        }
    }, [])
    
    return (
        <div className="flex basis-11/12">
            <nav className="flex flex-col py-8">
                {navigationItems.map((item, index) => (
                    <button key={ index } onClick={() => handleScroll(item.id)} className={`flex ${activeSection === item.id ? 'text-black dark:text-white' : ''} text-accentLight dark:text-accentDark`}>
                        { item.name }
                    </button>
                ))}
            </nav>
        </div>
    )
}

export default NavigationSection
