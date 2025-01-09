import goyalImage from '../assets/goyal.jpg'

const socials = [
    {
        link: '#',
        linkText: 'LinkedIn',
    },
]

const Contact = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-1 gap-4 p-4 w-full">
            <div className="flex flex-col items-start justify-between">
                <div className="flex flex-col items-start justify-start">
                    <div className="text-accentLight dark:text-accentDark">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="text-black dark:text-white text-2xl">Lorem, ipsum dolor sit amet</div>
                </div>
                <div className="flex flex-row items-start justify-start gap-8 flex-wrap">
                    <a href="#" className="underline underline-offset-8 decoration-accentLight dark:decoration-accentDark hover:decoration-black hover:dark:decoration-white">kanavgoyal898@gmail.com</a>
                    {socials.map((social, index) => (
                        <a key={ index } href={ social.link } className="underline underline-offset-8 decoration-accentLight dark:decoration-accentDark hover:decoration-black hover:dark:decoration-white">{ social.linkText }</a>
                    ))}
                </div>
            </div>
            <div className="flex items-start justify-start">
                <img src={ goyalImage } alt="Kanav Goyal" style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    )
}

export default Contact
