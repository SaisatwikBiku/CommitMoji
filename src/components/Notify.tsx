import React from 'react'

interface NotifyProps {
    visibility: number
    emoji: string
}

const Notify: React.FC<NotifyProps> = ({ visibility, emoji }) => {
    return (
        <div
            style={{
                opacity: visibility,
                transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
                transform: visibility ? 'translateY(0)' : 'translateY(-20px)',
                borderRadius: '16px',
            }}
            className='fixed top-5 right-5 bg-gray-600 backdrop-blur-md  text-white px-4 py-2 shadow-lg flex items-center'
        >
            Copied to clipboard {emoji}
        </div>
    )
}

export default React.memo(Notify)