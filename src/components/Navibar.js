import React from 'react';

const Navibar = () => {
  return (
    <nav className="navbar">
      <div className="links">
        <a href="/">
            About Me
        </a>
        <a href="/mytown">
            My Town
        </a>
      </div>
      <div className="brand">Sudeep Raj Badal</div>
    </nav> 
  );
};

export default Navibar;
