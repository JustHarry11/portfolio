import React, { useEffect, useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= docHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className={visible ? 'visible' : 'hidden'}>
      <p>
        Designed & Developed by{' '}
        <a
          href="https://github.com/JustHarry11"
          target="_blank"
          rel="noopener noreferrer"
        >
          Harry Lippa
        </a>
      </p>
    </footer>
  );
}
