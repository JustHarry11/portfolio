import './Contact.css'

export default function Contact() {
    return (
        <>
            <h1 className="contact-name-title">Contact</h1>
            <div className='contact-detail'>
                <img src="/images/IMG_3227.jpeg" alt='me' className='contact-img' />

                <p>I have always enjoyed problem solving and trying to understand how everything works which led me to the Software Engineering bootcamp from General Assembly. Through the course and when I was studying Game Design I came across a lot of different problems which I enjoyed navigating and figuring out solutions for. This is what drew me to the course in the first place as there are a lot of similarities between the two. I believe that I work well as a part of a team and know how to best utilise my skills to help with any project. I want to work with the Front-End as that was the area where I felt the most enjoyment throughout the course.</p>

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