import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome Home</h1>
      <div className="home-content">
        <p>You have successfully signed in!</p>
      </div>
    </div>
  );
}

export default Home;
