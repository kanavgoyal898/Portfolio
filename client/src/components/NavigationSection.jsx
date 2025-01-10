import { useEffect, useState } from 'react'
import './NavigationSection.css'

const handleScroll = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: 'smooth' })
}

const NavigationSection = ({ navigationItems }) => {
    const [activeSection, setActiveSection] = useState()

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.1,
        }

        const observer = new IntersectionObserver((entries) => {
            let maxIntersectionRatio = 0
            let activeItemId = null

            entries.forEach((entry) => {
                const { intersectionRatio, target } = entry
                if (intersectionRatio > maxIntersectionRatio && intersectionRatio >= 0.1) {
                    maxIntersectionRatio = intersectionRatio
                    activeItemId = target.id
                }
            })

            if (activeItemId) {
                setActiveSection(activeItemId)
            }
        }, observerOptions)

        navigationItems.forEach((item) => {
            const section = document.getElementById(item.id)
            if (section) {
                observer.observe(section)
            }
        })

        return () => observer.disconnect()
    }, [navigationItems])

    return (
        <div className="navigation-section">
            <nav className="navigation-bar">
                {navigationItems.map((item, index) => (
                    <button key={ index } onClick={ () => handleScroll(item.id) } className={ `${activeSection === item.id ? 'text-black dark:text-white' : ''} flex text-accentLight dark:text-accentDark hover:text-black hover:dark:text-white transition-colors duration-300 ease-in-out` }>
                        { item.name }
                    </button>
                ))}
            </nav>
        </div>
    )
}

export default NavigationSection
