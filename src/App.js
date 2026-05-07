import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('#282c34');

  const changeColor = () => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div style={{
      backgroundColor: bgColor,
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'background-color 0.3s'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '50px',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        textAlign: 'center'
      }}>
        <h1>CI/CD Assignment 6</h1>
        <h2>Imadiyi Osamudiamen</h2>
        <p><strong>BootCamp:</strong>TechCrush</p>
        <p><strong>Deployed via:</strong> GitHub Actions + AWS S3</p>
        <button
          onClick={changeColor}
          style={{
            marginTop: '20px',
            padding: '12px 30px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Change Background Color
        </button>
      </div>
    </div>
  );
}

export default App;
