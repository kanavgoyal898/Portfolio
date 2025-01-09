import LogoSection from './LogoSection'
import NavigationSection from './NavigationSection'

const AsideSection = ({ navigationItems }) => {
  return (
    <div className="w-[33.3%] h-screen fixed top-0 left-0 ps-10 flex flex-col">
      <LogoSection />
      <NavigationSection navigationItems={ navigationItems } />
    </div>
  )
}

export default AsideSection
