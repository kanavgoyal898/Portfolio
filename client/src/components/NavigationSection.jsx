const navigationItems = [
    'navigation item 1',
    'navigation item 2',
    'navigation item 3',
    'navigation item 4',
    'navigation item 5',
    'navigation item 6',
    'navigation item 7',
]

const NavigationSection = () => {
    return (
        <div className="flex basis-2/3">
            <nav className="flex flex-col">
                {navigationItems.map((item, index)=> {
                    return (
                        <a key={ index } href="#" className="flex">{ item }</a>
                    )
                })}
            </nav>
        </div>
    )
}

export default NavigationSection