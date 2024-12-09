import React, { useState } from 'react';

const SpoilerButton = ({spoilerText})=> {
  const [isSpoilerVisible, setIsSpoilerVisible] = useState(false);

  const handleClick = () => {
    setIsSpoilerVisible((prev) => !prev);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Button to toggle the spoiler */}
      <button
        style={{
          cursor: 'pointer',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#5a66ff',
          color: 'white',
          transition: 'background-color 0.3s ease',
        }}
        onClick={handleClick}
      >
        {isSpoilerVisible ? 'Hide Spoiler' : 'Show Spoiler'}
      </button>

      {/* Conditional rendering of the spoiler text */}
      {isSpoilerVisible && (
        <div
          style={{
            marginTop: '10px',
            padding: '10px',
            border: '1px solid #333',
            borderRadius: '5px',
            backgroundColor: '#F5F5F5',
            color: '#333',
            fontFamily: 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          }}
        >
        {spoilerText}
        </div>
      )}
    </div>
  );
};

export default SpoilerButton;