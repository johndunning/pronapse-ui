import React from 'react';
import './TopBar.css';

const TopBar = ({ onSettingsClick, handleSelectedClassification }) => (
    <div className="top-bar">
        <div className="top-bar-left">
            <button
                className="blue"
                onClick={() => handleSelectedClassification('Mail')}
            >
                Mail
            </button>
            <button
                className="blue"
                onClick={() => handleSelectedClassification('Finances')}
            >
                Finances
            </button>
            <button
                className="blue"
                onClick={() => handleSelectedClassification('Calendar')}
            >
                Calendar
            </button>
            <button
                className="blue"
                onClick={() => handleSelectedClassification('Story')}
            >
                Story
            </button>
            <button
                className="blue"
                onClick={() => handleSelectedClassification('AI')}
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
