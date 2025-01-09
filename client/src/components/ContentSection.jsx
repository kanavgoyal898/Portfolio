const ContentSection = ({ navigationItems }) => {
    return (
        <div className="ml-[33.3%] w-[66.6%] h-screen pe-10 overflow-y-auto">
            {navigationItems.map((navigationItem, index) => (
                <div key={ index } id={ navigationItem.id } className="pt-32 pb-2 min-h-full flex flex-col items-start justify-start">
                    { navigationItem.componentName }
                </div>
            ))}
        </div>
    )
}

export default ContentSection
