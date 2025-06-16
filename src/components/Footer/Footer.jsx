export default function Footer() {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '10px',
            fontSize: '0.9rem',
            color: '#666',
            position: 'fixed',
            bottom: 0,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            userSelect: 'none',
            zIndex: 1000
        }}>
            <p>Designed & Developed by <a href="https://github.com/JustHarry11" target='_blank' rel='noopener noreferrer'>Harry Lippa</a></p>
        </footer>
    )
}
