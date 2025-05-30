import React from 'react';
import './TopBar.css';

const TopBar = ({ onSettingsClick, onSelectClassification }) => (
    <div className="top-bar">
        <div className="top-bar-left">
            <button
                className="blue"
                onClick={() => onSelectClassification('Mail')}
            >
                Mail
            </button>
            <button
                className="blue"
                onClick={() => onSelectClassification('Finances')}
            >
                Finances
            </button>
            <button
                className="blue"
                onClick={() => onSelectClassification('Calendar')}
            >
                Calendar
            </button>
            <button
                className="blue"
                onClick={() => onSelectClassification('Story')}
            >
                Story
            </button>
            <button
                className="blue"
                onClick={() => onSelectClassification('AI')}
            >
                AI
            </button>
        </div>
        <div className="top-bar-right">
            <button className="purple">Search</button>
            <button className="purple">Sort</button>
            <button className="purple">Filter</button>
            <button className="green" onClick={onSettingsClick}>
                Settings
            </button>
            <button className="orange">Rules</button>
        </div>
    </div>
);

export default TopBar;
