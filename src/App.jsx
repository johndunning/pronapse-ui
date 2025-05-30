import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Tile from './components/Tile';
import ClassificationFilter from './components/ClassificationFilter';
import AddClassification from './components/AddClassification';

import './App.css';

const mockData = Array.from({ length: 8 }, (_, idx) => ({
    id: idx + 1,
    title: 'Pre-order the new Surface Pro and Surface Laptop PCs today',
    sender: 'John Dunning',
    timestamp: '27/05/2025 16:42',
    classification: 'Mail',
    classifications: ['Mail', 'AI', 'Calendar'],
}));

const classificationsList = [
    { name: 'School', color: '#5c1a84' },
    { name: 'Work', color: '#4a4a4a' },
    { name: 'Bills', color: '#cc4a11' },
    { name: 'Social', color: '#1eaae7' },
    { name: 'Projects', color: '#0c5b75' },
    { name: 'Family', color: '#ffc4a3' },
    { name: 'Admin', color: '#bbbbbb' },
    { name: 'Health', color: '#4e9c1e' },
    { name: 'No Filter', color: '#ffffff' },
];

function App() {
    const [selectedClass, setSelectedClass] = useState('Mail');
    const [showAddForm, setShowAddForm] = useState(false);
    const [classifications, setClassifications] = useState(classificationsList);

    const handleSelectClassification = (name) => {
        setSelectedClass(name);
        setShowAddForm(false); // Reset to original view
    };

    const handleSaveClassification = (newClass) => {
        setClassifications((prev) => [...prev, newClass]);
        setSelectedClass(newClass.name);
        setShowAddForm(false);
    };

    const filteredData = mockData.filter((item) =>
        item.classifications.includes(selectedClass)
    );

    return (
        <div className="app-container">
            <TopBar
                onSettingsClick={() => setShowAddForm(true)}
                onSelectClassification={handleSelectClassification}
            />
            <div className="main-content">
                {showAddForm ? (
                    <AddClassification
                        onSave={handleSaveClassification}
                        onCancel={() => setShowAddForm(false)}
                    />
                ) : (
                    <div className="tiles-grid">
                        {filteredData.map((item) => (
                            <Tile
                                key={item.id}
                                title={item.title}
                                sender={item.sender}
                                timestamp={item.timestamp}
                                classification={selectedClass}
                                classifications={item.classifications}
                            />
                        ))}
                    </div>
                )}
                <ClassificationFilter
                    classifications={classifications}
                    selected={selectedClass}
                    onSelect={handleSelectClassification}
                />
            </div>
        </div>
    );
}

export default App;
