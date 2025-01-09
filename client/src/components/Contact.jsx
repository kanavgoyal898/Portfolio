import goyalImage from '../assets/goyal.jpg'
import './Contact.css'

const mails = [
    {
        link: '#',
        mailText: 'kanavgoyal898@gmail.com',
    },
]

const socials = [
    {
        link: '#',
        linkText: 'Social Link',
    },
]

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-details">
                <div className="contact-description">
                    <div className="contact-subheading">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="contact-heading">Lorem, ipsum dolor sit amet</div>
                </div>
                <div className="socials-container">
                    {mails.map((mail, index) => (
                        <a key={ index } href={ mail.link } className="text-xs">{ mail.mailText }</a>
                    ))}
                    {socials.map((social, index) => (
                        <a key={ index } href={ social.link } className="text-xs">{ social.linkText }</a>
                    ))}
                </div>
            </div>
            <div className="contact-image">
                <img src={ goyalImage } alt="Kanav Goyal" style={{ width: '100%', height: 'auto' }} />
            </div>
        </div>
    )
}

export default Contact
