import LogoSection from './LogoSection'
import NavigationSection from './NavigationSection'

const AsideSection = () => {
  return (
    <div className="w-[33.3%] h-screen bg-blue-500 fixed top-0 left-0 ps-10 flex flex-col">
      <LogoSection />
      <NavigationSection />
    </div>
  )
}

export default AsideSection