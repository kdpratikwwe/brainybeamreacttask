import React, { useState } from 'react';
import './LiveTextPreview.css';

function LiveTextPreview() {
    // State to store the input text
    const [text, setText] = useState('');

    // Function to handle input changes
    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <div className="live-text-container">
            <h2>Live Text Preview</h2>

            <input
                type="text"
                placeholder="Type something..."
                value={text}
                onChange={handleChange}
                className="text-input"
            />

            <div className="preview-box">
                <h3>Live Preview:</h3>
                <p className="preview-text">{text}</p>
            </div>
        </div>
    );
}

export default LiveTextPreview;
