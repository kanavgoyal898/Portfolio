import LogoSection from './LogoSection'
import NavigationSection from './NavigationSection'
import './AsideSection.css'

const AsideSection = ({ navigationItems }) => {
  return (
    <div className="aside-container">
      <LogoSection />
      <NavigationSection navigationItems={ navigationItems } />
    </div>
  )
}

export default AsideSection
