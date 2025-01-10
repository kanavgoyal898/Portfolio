import './LogoSection.css'

const name = 'Kanav Goyal'

const LogoSection = () => {
  return (
    <button className="logo-section flex flex-row justify-center md:justify-start">
      <h1 className="logo">
        {name.split('').map((letter, index) => (
          <span key={ index } className={ letter === ' ' ? 'space' : index === 0 ? 'first-letter' : 'letter' } style={{ animationDelay: `${0.1 * (index)**(0.3)}s` }} dangerouslySetInnerHTML={{ __html: letter === ' ' ? '&nbsp;' : letter }}/>
        ))}
      </h1>
    </button>
  )
}

export default LogoSection
