import React from 'react';
import './Tile.css';
import { MdEmail } from 'react-icons/md';

const Tile = ({
    title,
    sender,
    timestamp,
    classification,
    classifications,
    styleOverrides = {},
}) => {
    const {
        tileColor = '#005b76',
        senderBgColor = '#1983b1',
        senderTextColor = '#ffffff',
        messageTextColor = '#ffffff',
        dotColor = '#ffffff',
        iconColor = '#80c2ff', // make sure this is inside the destructuring
    } = styleOverrides;

    return (
        <div className="tile" style={{ backgroundColor: tileColor }}>
            <div className="tile-header">
                <span className="tile-icon" style={{ color: iconColor }}>
                    <MdEmail />
                </span>
                <span className="tile-timestamp">{timestamp}</span>
            </div>

            <div
                className="tile-sender-bar"
                style={{
                    backgroundColor: senderBgColor,
                    color: senderTextColor,
                }}
            >
                {sender}
            </div>

            <div className="tile-body">
                <div className="tile-text" style={{ color: messageTextColor }}>
                    {title}
                </div>
            </div>

            <div className="tile-footer">
                {classifications.map((cls, idx) => (
                    <span
                        key={idx}
                        className={`tile-dot ${
                            cls === classification ? 'active' : ''
                        }`}
                        style={{
                            backgroundColor:
                                cls === classification
                                    ? dotColor
                                    : 'rgba(255,255,255,0.3)',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tile;
