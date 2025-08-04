import React, { useEffect, useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [visible, setVisible] = useState(false);

useEffect(() => {
  const checkFooterVisibility = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const buffer = 150;

    if (Math.ceil(scrollTop + windowHeight) >= docHeight - buffer) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  checkFooterVisibility(); // check immediately on load
  window.addEventListener('scroll', checkFooterVisibility);
  window.addEventListener('resize', checkFooterVisibility);

  return () => {
    window.removeEventListener('scroll', checkFooterVisibility);
    window.removeEventListener('resize', checkFooterVisibility);
  };
}, []);

  return (
    <footer className={visible ? 'visible' : 'hidden'}>
      <p>
        Designed & Developed by{' '}
        <a
          href="https://www.linkedin.com/in/harry-lippa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Harry Lippa
        </a>
      </p>
    </footer>
  );
}
