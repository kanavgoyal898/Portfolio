import './LogoSection.css'

const name = 'Kanav Goyal'

const LogoSection = () => {
  return (
    <div className="flex basis-1/3">
      <a href="#" className="max-w-fit max-h-fit my-8">
        <h1 className="text-2xl">
          {name.split('').map((letter, index) => (
            <span
              key={index}
              className={letter === ' ' ? 'space' : index === 0 ? 'first-letter' : 'letter'}
              style={{ animationDelay: `${0.1 * index}s` }}
              dangerouslySetInnerHTML={{ __html: letter === ' ' ? '&nbsp;' : letter }}
            />
          ))}
        </h1>
      </a>
    </div>
  )
}

export default LogoSection
