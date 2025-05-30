import React from 'react';
import './TagFilter.css';

const TagFilter = ({ tags, selected, onSelect }) => (
    <div className="classification-bar">
        {tags.map((item, idx) => (
            <div
                key={idx}
                className="dot-wrapper"
                onClick={() => onSelect(item.name)}
            >
                <div
                    className="dot"
                    style={{
                        backgroundColor: item.color,
                        border:
                            item.name === 'No Filter'
                                ? '2px solid black'
                                : 'none',
                    }}
                />
                {selected === item.name && <div className="underline" />}
            </div>
        ))}
    </div>
);

export default TagFilter;
