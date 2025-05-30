import React, { useState } from 'react';
import Tile from './Tile';
import './AddTag.css';

const AddClassification = ({ onSave, onCancel }) => {
    const [name, setName] = useState('');
    const [iconColor, setIconColor] = useState('#80c2ff');
    const [tileColor, setTileColor] = useState('#005b76');
    const [senderBgColor, setSenderBgColor] = useState('#1983b1');
    const [senderTextColor, setSenderTextColor] = useState('#ffffff');
    const [messageTextColor, setMessageTextColor] = useState('#ffffff');
    const [dotColor, setDotColor] = useState('#ffffff');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            name,
            icon,
            tileColor,
            senderBgColor,
            senderTextColor,
            messageTextColor,
            dotColor,
            iconColor,
        });
    };

    const previewData = {
        title: 'Pre-order the new Surface Pro and Surface Laptop PCs today',
        sender: 'John Dunning',
        timestamp: '27/05/2025 16:42',
        classification: name,
        classifications: [name],
        styleOverrides: {
            tileColor,
            senderBgColor,
            senderTextColor,
            messageTextColor,
            dotColor,
            iconColor,
        },
    };

    return (
        <div className="add-classification-container">
            <div className="tile-preview">
                <Tile {...previewData} />
            </div>

            <form onSubmit={handleSubmit} className="classification-form">
                <button type="button" className="title-button">
                    Create Classification
                </button>

                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Icon Color:
                    <input
                        type="color"
                        value={iconColor}
                        onChange={(e) => setIconColor(e.target.value)}
                    />
                </label>

                <label>
                    Tile Background:
                    <input
                        type="color"
                        value={tileColor}
                        onChange={(e) => setTileColor(e.target.value)}
                    />
                </label>

                <label>
                    Sender Background:
                    <input
                        type="color"
                        value={senderBgColor}
                        onChange={(e) => setSenderBgColor(e.target.value)}
                    />
                </label>

                <label>
                    Sender Text Color:
                    <input
                        type="color"
                        value={senderTextColor}
                        onChange={(e) => setSenderTextColor(e.target.value)}
                    />
                </label>

                <label>
                    Message Text Color:
                    <input
                        type="color"
                        value={messageTextColor}
                        onChange={(e) => setMessageTextColor(e.target.value)}
                    />
                </label>

                <label>
                    Dot Color:
                    <input
                        type="color"
                        value={dotColor}
                        onChange={(e) => setDotColor(e.target.value)}
                    />
                </label>

                <div className="buttonRow">
                    <button type="button" onClick={onCancel}>
                        Cancel
                    </button>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    );
};

export default AddClassification;
