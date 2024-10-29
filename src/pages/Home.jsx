import React from 'react';
import './Home.css';

const Home = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Ensure the path is correct
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Hey, I'm Muhammed Anas</h1>
        <h2 className="home-subtitle">A MERN Full Stack Developer</h2>
        <p className="home-description">Experienced in building full-stack applications using MongoDB, Express, React, and Node.js. Passionate about creating efficient and scalable web solutions.</p>
        <button onClick={() => window.location.href = '#projects'}>View My Work</button>
        <button onClick={handleResumeDownload}>Download My Resume</button>
        <div className="social-links">
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <img src='https://i.pinimg.com/564x/b2/f8/28/b2f828513f21444829a619ce563d4d4e.jpg' alt='LinkedIn' style={{width: '50px', height: '50px'}} />
          </a>
          <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
            <img src='https://i.pinimg.com/564x/cf/5f/7d/cf5f7dca8d30d52a39f4043f3796d7f0.jpg' alt='GitHub' style={{width: '50px', height: '50px'}} />
          </a>
        </div>
      </div>
      <div className="home-image">
        <img src='https://i.pinimg.com/564x/4b/bc/5c/4bbc5c7f9365f56b36f3806bb40a1b9a.jpg' alt='Profile' />
      </div>
    </div>
  );
};

export default Home;
