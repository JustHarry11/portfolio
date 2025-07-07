import './Contact.css'

export default function Contact() {
    return (
        <>
            <h1 className="contact-name-title">Contact</h1>
            <div className='contact-detail'>
                <img src="/images/IMG_3227.jpeg" alt='me' className='contact-img' />

                <a href="https://github.com/JustHarry11" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <img src="/images/GitHub-logo.png" alt="GitHub" className="icon" />
                    <h4>GitHub</h4>
                </a>
                <a href="https://www.linkedin.com/in/harry-lippa/" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <img src="/images/LinkedIn-logo.png" alt="LinkedIn" className="icon" />
                    <h4>LinkedIn</h4>
                </a>

            </div>
        </>

    )

}