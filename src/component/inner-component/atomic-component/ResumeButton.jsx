import { MdDownload } from "react-icons/md";

export function ResumeButton() {
    const buttonStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 24px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textDecoration: 'none',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontWeight: '600',
        fontSize: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
        transition: 'all 0.3s ease',
        border: 'none',
        cursor: 'pointer'
    };

    const hoverStyle = {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
        background: 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)'
    };

    return (
        <a
            href="https://drive.google.com/file/d/1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
            onMouseEnter={(e) => {
                Object.assign(e.target.style, hoverStyle);
            }}
            onMouseLeave={(e) => {
                Object.assign(e.target.style, buttonStyle);
            }}
        >
            <MdDownload size={20} />
            Download Resume
        </a>
    );
}

export default ResumeButton;