import './ContentSection.css'

const ContentSection = ({ navigationItems }) => {
    return (
        <div className="content-container">
            {navigationItems.map((navigationItem, index) => (
                <div key={ index } id={ navigationItem.id } className="content-section">
                    { navigationItem.componentName }
                </div>
            ))}
        </div>
    )
}

export default ContentSection
