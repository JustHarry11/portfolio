import './Contact.css'

export default function Contact() {
    return (
        <>
            <h1 className="contact-name-title">Contact</h1>
            <div className='contact-detail'>
                <img src="/images/IMG_3227.jpeg" alt='me' className='contact-img' />

                <p>I have always enjoyed problem solving and understanding how things work. I studied Game Design at BA level and Software Engineering at a bootcamp from General Assembly. Both courses have enabled me to navigate and figure out solutions. There are similarities in both courses that have helped me utilise my skills.</p>

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