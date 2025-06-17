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
        <div className="page-content">
            <h1>
                <Typewriter
                    words={['Harry']}
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
                        words={['Front End Developer']}
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