import LogoSection from './LogoSection'
import NavigationSection from './NavigationSection'

const AsideSection = () => {
    return (
        <div className="h-screen flex flex-col basis-1/3 bg-blue-500">
            <LogoSection />
            <NavigationSection />
        </div>
        
    )
}

export default AsideSection