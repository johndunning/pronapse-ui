import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Tile from './components/Tile';
import TagFilter from './components/TagFilter';
import Addtag from './components/Addtag';

import './App.css';
import { MdSchedule } from 'react-icons/md';

const tileStyles = {
    default: {
        tileColor: '#005b76',
        senderBgColor: '#1983b1',
        senderTextColor: '#ffffff',
        messageTextColor: '#ffffff',
        dotColor: '#ffffff',
        iconColor: '#80c2ff',
    },
    school: {
        dotColor: '#db516d',
        iconColor: '#db516d',
        messageTextColor: '#ffffff',
        name: 'School',
        senderBgColor: '#db516d"',
        senderTextColor: '#ffffff',
        tileColor: '#750017',
    },
};

const tagsList = [
    { name: 'school', color: '#db516d' },
    { name: 'default', color: '#ffffff' },
];

const mockData = [
    {
        id: 1,
        title: 'Pre-order the new Surface Pro and Surface Laptop PCs today',
        sender: 'John Dunning',
        timestamp: '27/05/2025 16:42',
        classification: 'Mail',
        style: 'default',
        tags: ['School', 'Work', 'Projects', 'Mail'],
    },
    {
        id: 2,
        title: 'Your health report is now available',
        sender: 'Health Center',
        timestamp: '27/05/2025 10:21',
        classification: 'Mail',
        style: 'default',
        tags: ['Health', 'Mail'],
    },
    {
        id: 3,
        title: 'Family reunion next weekend',
        sender: 'Aunt May',
        timestamp: '26/05/2025 18:09',
        classification: 'Mail',
        style: 'default',
        tags: ['Family', 'Social'],
    },
    {
        id: 4,
        title: 'New school term information',
        sender: 'Principal',
        timestamp: '25/05/2025 08:45',
        classification: 'Mail',
        style: 'school',
        tags: ['School', 'Mail'],
    },
    {
        id: 5,
        title: 'Monthly admin checklist',
        sender: 'Admin System',
        timestamp: '24/05/2025 14:02',
        classification: 'Mail',
        style: 'default',
        tags: ['Admin'],
    },
    {
        id: 6,
        title: 'Electricity bill due',
        sender: 'Power Company',
        timestamp: '23/05/2025 17:12',
        classification: 'Mail',
        style: 'default',
        tags: ['Bills'],
    },
    {
        id: 7,
        title: 'Upcoming project deadlines',
        sender: 'Project Manager',
        timestamp: '22/05/2025 09:32',
        classification: 'Mail',
        style: 'default',
        tags: ['Projects', 'Work'],
    },
    {
        id: 8,
        title: 'Weekend hangout plans',
        sender: 'Best Friend',
        timestamp: '21/05/2025 19:44',
        classification: 'Mail',
        style: 'default',
        tags: ['Social'],
    },
];

function App() {
    const [selectedClass, setSelectedClass] = useState('Mail');
    const [selectedTag, setSelectedTag] = useState('');

    const [showAddForm, setShowAddForm] = useState(false);
    const [tags, settags] = useState(tagsList);

    const handleSelectedClassification = (name) => {
        setSelectedClass(name);
        setShowAddForm(false); // Reset to original view
    };

    const handleSelectedTag = (name) => {
        setSelectedTag(name);
        setShowAddForm(false); // Reset to original view
    };

    const handleSaveTag = (newClass) => {
        console.log('New class saved:', newClass);
        settags((prev) => [
            ...prev,
            { name: newClass.name, color: newClass.dotColor },
        ]);
        tagsList.push(newClass); // Add to the global list so it appears as a button
        setSelectedClass(newClass.name);
        setShowAddForm(false);
    };

    const filteredData = mockData.filter(
        (item) => item.classification === selectedClass
    );

    return (
        <div className="app-container">
            <TopBar
                onSettingsClick={() => setShowAddForm(true)}
                handleSelectedClassification={handleSelectedClassification}
            />
            <div className="main-content">
                {showAddForm ? (
                    <Addtag
                        onSave={handleSaveTag}
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
                                classification={handleSelectedTag}
                                styleOverrides={tileStyles[item.style]}
                                tags={item.tags}
                            />
                        ))}
                    </div>
                )}
                <TagFilter
                    key={tags.length}
                    tags={tags}
                    selected={selectedTag}
                    onSelect={handleSelectedTag}
                />
            </div>
        </div>
    );
}

export default App;
