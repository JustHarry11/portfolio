import { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'

import './Home.css'

export default function Home() {
    const [showSecondLine, setShowSecondLine] = useState(false);
    const [typingDone, setTypingDone] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setShowSecondLine(true);
        }, 2000); // delay in ms before second line appears

        return () => clearTimeout(delay);
    }, []);

    return (
        <div className="home-page-content">
            <h1>
                <Typewriter
                    words={['Harry Lippa']}
                    loop={1}
                    cursor={!typingDone}
                    cursorStyle=""
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h1>
            {showSecondLine && (
                <h2>
                    <Typewriter
                        words={['Full Stack Developer']}
                        loop={1}
                        cursor={!typingDone}
                        cursorStyle=""
                        typeSpeed={75}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={() => setTypingDone(true)}
                    />
                </h2>
            )}
        </div>
    )
}